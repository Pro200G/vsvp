from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from .user import UserResponse

class ClientBase(BaseModel):
    address: Optional[str] = None
    contact_phone: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    budget_range: Optional[str] = None
    project_description: Optional[str] = None

class ClientCreate(ClientBase):
    user_id: int

class ClientResponse(ClientBase):
    id: int
    user_id: int
    created_at: datetime
    user: Optional[UserResponse] = None

    class Config:
        from_attributes = True

class Client(ClientBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True