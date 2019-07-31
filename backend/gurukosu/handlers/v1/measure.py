from connexion import request

from gurukosu.models import db, Measure
from gurukosu.handlers import ma


class MeasureSchema(ma.ModelSchema):
    class Meta:
        model = Measure

def list():
    return MeasureSchema(many=True).dump(Measure.query.order_by(Measure.date.desc()).all()).data

def add():
    data = MeasureSchema().load(request.json)
    print(data)
    db.session.add(data.data)
    db.session.commit()
    return MeasureSchema().dump(data.data).data
