from . import engine
from ..models.user import Base

def create_tables():
    #Создание всех таблиц в БД
    Base.metadata.create_all(bind=engine)

def drop_tables():
    #Удаление всех таблиц из БД
    Base.metadata.drop_all(bind=engine)