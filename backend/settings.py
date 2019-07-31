
class Config(object):
    DEBUG = False
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@postgres:5432/postgres'

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'

class DevelopmentConfig(Config):
    DEBUG = True


config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}
