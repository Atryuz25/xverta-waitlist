from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
from datetime import datetime
import os
import logging
import ssl
import certifi

# Add logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Normally load from env var:
MONGO_URL = os.getenv("MONGO_URL", "mongodb+srv://trishajanath:r4o5Q2nQiifxvd2F@xvertawaitlist.mesy3il.mongodb.net/?retryWrites=true&w=majority&appName=XvertaWaitlist")

# Fix SSL certificate issue on macOS
client = MongoClient(MONGO_URL, tlsCAFile=certifi.where())
db = client["XvertaWaitlist"]
waitlist_collection = db["emails"]

class WaitlistEntry(BaseModel):
    name: str
    email: EmailStr
    phone: str
@app.on_event("startup")
async def startup_event():
    try:
        # Test the connection
        client.admin.command('ping')
        logger.info("✅ MongoDB connection successful")
        
        # Check if database and collection exist
        logger.info(f"Available databases: {client.list_database_names()}")
        logger.info(f"Collections in XvertaWaitlist: {db.list_collection_names()}")
        
    except Exception as e:
        logger.error(f"❌ MongoDB connection failed: {e}")

@app.post("/waitlist")
def join_waitlist(entry: WaitlistEntry):
    try:
        # Prevent duplicate signups
        if waitlist_collection.find_one({"email": entry.email}):
            raise HTTPException(status_code=400, detail="Email already registered")

        waitlist_collection.insert_one({
            "name": entry.name,
            "email": entry.email,
            "phone": entry.phone,
            "created_at": datetime.utcnow()
        })

        return {"message": "✅ Successfully joined waitlist!"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error adding to waitlist: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to add to waitlist")

@app.get("/waitlist")
def get_waitlist():
    """Get all waitlist entries"""
    try:
        logger.info("Attempting to retrieve waitlist entries...")
        
        # Check if collection exists and has documents
        count = waitlist_collection.count_documents({})
        logger.info(f"Collection has {count} documents")
        
        emails = list(waitlist_collection.find({}, {"_id": 0}))
        logger.info(f"Retrieved {len(emails)} entries")
        
        return {
            "total_count": len(emails),
            "entries": emails
        }
    except Exception as e:
        logger.error(f"Error retrieving entries: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to retrieve entries: {str(e)}")
    
@app.get("/waitlist/count")
def get_waitlist_count():
    """Get total number of signups"""
    try:
        count = waitlist_collection.count_documents({})
        return {"count": count}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to get count")
    
@app.get("/health")
def health_check():
    """Test MongoDB connection"""
    try:
        # Ping MongoDB
        client.admin.command('ping')
        
        # Get collection info
        count = waitlist_collection.count_documents({})
        
        return {
            "status": "healthy",
            "mongodb": "connected",
            "database": "XvertaWaitlist",
            "collection": "emails",
            "total_entries": count
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Health check failed: {str(e)}")