from sqlalchemy.orm import Session
from typing import List, Optional
from math import radians, sin, cos, sqrt, atan2

from ..models.specialist import Specialist

class SpecialistService:
    def get_specialists(self, db: Session, skip: int = 0, limit: int = 100) -> List[Specialist]:
        return db.query(Specialist).offset(skip).limit(limit).all()

    def get_specialist(self, db: Session, specialist_id: int) -> Optional[Specialist]:
        return db.query(Specialist).filter(Specialist.id == specialist_id).first()

    def get_nearby_specialists(self, db: Session, lat: float, lng: float, radius_km: float = 10.0) -> List[Specialist]:
        # Простая реализация поиска по радиусу (для продакшена лучше использовать PostGIS)
        all_specialists = db.query(Specialist).filter(
            Specialist.latitude.isnot(None),
            Specialist.longitude.isnot(None)
        ).all()
        
        nearby_specialists = []
        for specialist in all_specialists:
            distance = self._calculate_distance(lat, lng, specialist.latitude, specialist.longitude)
            if distance <= radius_km:
                nearby_specialists.append(specialist)
        
        return nearby_specialists

    def _calculate_distance(self, lat1: float, lon1: float, lat2: float, lon2: float) -> float:
        # Расчет расстояния по формуле Haversine (в километрах)
        R = 6371  # Радиус Земли в км
        
        lat1_rad = radians(lat1)
        lon1_rad = radians(lon1)
        lat2_rad = radians(lat2)
        lon2_rad = radians(lon2)
        
        dlon = lon2_rad - lon1_rad
        dlat = lat2_rad - lat1_rad
        
        a = sin(dlat/2)**2 + cos(lat1_rad) * cos(lat2_rad) * sin(dlon/2)**2
        c = 2 * atan2(sqrt(a), sqrt(1-a))
        
        return R * c

specialist_service = SpecialistService()