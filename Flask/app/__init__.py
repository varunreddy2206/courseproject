from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import pymysql
from sqlalchemy import inspect, text
from dotenv import load_dotenv  #  NEW: for loading .env
import os  #  NEW: to read env variables

# Initialize database
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)

    #  Load environment variables from .env
    load_dotenv()

    #  Database credentials (loaded securely from .env)
    DB_USER = os.getenv("DB_USER", "root")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "root")
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_NAME = os.getenv("DB_NAME", "newdatabase")

    #  Step 1: Connect to MySQL server and create the new database if missing
    connection = pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD
    )
    try:
        with connection.cursor() as cursor:
            cursor.execute(f"CREATE DATABASE IF NOT EXISTS {DB_NAME}")
            print(f" Database '{DB_NAME}' checked/created successfully.")
    finally:
        connection.close()

    #  Step 2: Connect Flask to the new database
    app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    #  Step 3: Initialize SQLAlchemy
    db.init_app(app)

    #  Step 4: Import and register routes (with '/api' prefix)
    from .routes import bp as routes_bp
    app.register_blueprint(routes_bp, url_prefix="/api")

    #  Step 5: Auto-create all tables
    with app.app_context():
        db.create_all()
        print(f" Tables created successfully in '{DB_NAME}'!")

        #  Step 6: Automatically add missing columns to course_registration
        inspector = inspect(db.engine)
        columns = [col['name'] for col in inspector.get_columns('course_registration')]

        if 'student_name' not in columns:
            with db.engine.connect() as conn:
                conn.execute(text("ALTER TABLE course_registration ADD COLUMN student_name VARCHAR(255)"))
                print(" Added 'student_name' column to course_registration")

        if 'student_email' not in columns:
            with db.engine.connect() as conn:
                conn.execute(text("ALTER TABLE course_registration ADD COLUMN student_email VARCHAR(255)"))
                print(" Added 'student_email' column to course_registration")

        db.session.commit()

    print(" Flask app initialized successfully and ready to serve API routes!")
    return app
