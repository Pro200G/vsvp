from sqlalchemy.orm import Session
from typing import List, Optional, Dict, Any
from math import radians, sin, cos, sqrt, atan2

from ..models.client import Client
from ..models.user import User
from ..schemas.client import ClientCreate

class ClientService:
    def get_clients(self, db: Session, skip: int = 0, limit: int = 100) -> List[Client]:
        return db.query(Client).offset(skip).limit(limit).all()

    def get_client(self, db: Session, client_id: int) -> Optional[Client]:
        return db.query(Client).filter(Client.id == client_id).first()

    def get_client_by_user_id(self, db: Session, user_id: int) -> Optional[Client]:
        return db.query(Client).filter(Client.user_id == user_id).first()

    def get_nearby_clients(self, db: Session, lat: float, lng: float, radius_km: float = 10.0) -> List[Client]:
        # Поиск клиентов в радиусе (для специалистов)
        all_clients = db.query(Client).filter(
            Client.latitude.isnot(None),
            Client.longitude.isnot(None)
        ).all()
        
        nearby_clients = []
        for client in all_clients:
            distance = self._calculate_distance(lat, lng, client.latitude, client.longitude)
            if distance <= radius_km:
                nearby_clients.append(client)
        
        return nearby_clients

    def create_client(self, db: Session, client_data: Dict[str, Any]) -> Client:
        db_client = Client(
            user_id=client_data.get("user_id"),
            address=client_data.get("address"),
            contact_phone=client_data.get("contact_phone"),
            latitude=client_data.get("latitude"),
            longitude=client_data.get("longitude"),
            budget_range=client_data.get("budget_range"),
            project_description=client_data.get("project_description")
        )
        db.add(db_client)
        db.commit()
        db.refresh(db_client)
        return db_client

    def update_client(self, db: Session, client_id: int, client_data: Dict[str, Any]) -> Optional[Client]:
        db_client = self.get_client(db, client_id)
        if db_client:
            for key, value in client_data.items():
                if hasattr(db_client, key) and value is not None:
                    setattr(db_client, key, value)
            db.commit()
            db.refresh(db_client)
        return db_client

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

client_service = ClientService()