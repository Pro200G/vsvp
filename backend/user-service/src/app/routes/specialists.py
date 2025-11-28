from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..schemas.specialist import SpecialistResponse
from ..services import specialist_service

router = APIRouter(prefix="/specialists", tags=["specialists"])

@router.get("/", response_model=List[SpecialistResponse])
def get_specialists(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    specialists = specialist_service.get_specialists(db, skip=skip, limit=limit)
    return specialists

@router.get("/{specialist_id}", response_model=SpecialistResponse)
def get_specialist(specialist_id: int, db: Session = Depends(get_db)):
    db_specialist = specialist_service.get_specialist(db, specialist_id=specialist_id)
    if db_specialist is None:
        raise HTTPException(status_code=404, detail="Specialist not found")
    return db_specialist

@router.get("/nearby/", response_model=List[SpecialistResponse])
def get_nearby_specialists(lat: float, lng: float, radius_km: float = 10.0, db: Session = Depends(get_db)):
    specialists = specialist_service.get_nearby_specialists(db, lat, lng, radius_km)
    return specialists