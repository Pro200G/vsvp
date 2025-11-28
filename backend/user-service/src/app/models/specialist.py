from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, Float, ForeignKey, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .user import Base

class Specialist(Base):
    __tablename__ = "specialists"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    company_name = Column(String(255))
    description = Column(Text)
    experience_years = Column(Integer)
    rating = Column(Float, default=0.0)
    services_offered = Column(ARRAY(String))
    license_number = Column(String(100))
    is_verified = Column(Boolean, default=False)
    latitude = Column(Float)
    longitude = Column(Float)
    address = Column(Text)
    contact_phone = Column(String(20))
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationship
    user = relationship("User", backref="specialist_profile")

    def __repr__(self):
        return f"<Specialist(id={self.id}, company={self.company_name})>"