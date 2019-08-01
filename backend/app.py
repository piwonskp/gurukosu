import connexion
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from gurukosu.models import db
from gurukosu.handlers import ma
from settings import config


connex_app = connexion.App(__name__, specification_dir='api/')
app = connex_app.app
app.config.from_object(config.get(app.config['ENV']))

db.init_app(app)
ma.init_app(app)

connex_app.add_api('v1/api.yaml')
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://localhost:5000",
            "https://localhost:3000"
        ]
    }
})


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
