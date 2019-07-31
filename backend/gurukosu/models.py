from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, DateTime


db = SQLAlchemy()

class Measure(db.Model):
    __tablename__ = 'measures'
    id = Column(Integer, primary_key=True)
    value = Column(Integer)
    date = Column(DateTime())
