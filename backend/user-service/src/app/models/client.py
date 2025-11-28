from sqlalchemy import Column, Integer, String, Text, DateTime, Float, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .user import Base

class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    address = Column(Text)
    contact_phone = Column(String(20))
    latitude = Column(Float)
    longitude = Column(Float)
    budget_range = Column(String(50))
    project_description = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # связь для прогрузки каждого клиента
    user = relationship("User", backref="client_profile")

    def __repr__(self):
        return f"<Client(id={self.id}, user_id={self.user_id})>"