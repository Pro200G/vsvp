from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..schemas.client import ClientResponse
from ..services import client_service

router = APIRouter(prefix="/clients", tags=["clients"])

@router.get("/", response_model=List[ClientResponse])
def get_clients(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    clients = client_service.get_clients(db, skip=skip, limit=limit)
    return clients

@router.get("/{client_id}", response_model=ClientResponse)
def get_client(client_id: int, db: Session = Depends(get_db)):
    db_client = client_service.get_client(db, client_id=client_id)
    if db_client is None:
        raise HTTPException(status_code=404, detail="Client not found")
    return db_client

@router.get("/nearby/", response_model=List[ClientResponse])
def get_nearby_clients(lat: float, lng: float, radius_km: float = 10.0, db: Session = Depends(get_db)):
    clients = client_service.get_nearby_clients(db, lat, lng, radius_km)
    return clients

@router.post("/", response_model=ClientResponse, status_code=201)
def create_client(client_data: dict, db: Session = Depends(get_db)):
    # Здесь будет логика создания клиента
    # Пока заглушка
    return client_service.create_client(db, client_data)