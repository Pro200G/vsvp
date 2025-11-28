from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from .user import UserResponse

class SpecialistBase(BaseModel):
    company_name: Optional[str] = None
    description: Optional[str] = None
    experience_years: Optional[int] = None
    services_offered: Optional[List[str]] = None
    license_number: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    address: Optional[str] = None
    contact_phone: Optional[str] = None

class SpecialistCreate(SpecialistBase):
    user_id: int

class SpecialistResponse(SpecialistBase):
    id: int
    user_id: int
    rating: float = 0.0
    is_verified: bool = False
    created_at: datetime
    user: Optional[UserResponse] = None

    class Config:
        from_attributes = True

class Specialist(SpecialistBase):
    id: int
    user_id: int
    rating: float
    is_verified: bool
    created_at: datetime

    class Config:
        from_attributes = True