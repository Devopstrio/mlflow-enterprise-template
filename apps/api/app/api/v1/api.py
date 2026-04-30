from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, experiments, models, deployment, monitoring, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(experiments.router, prefix="/experiments", tags=["experiments"])
api_router.include_router(models.router, prefix="/models", tags=["models"])
api_router.include_router(deployment.router, prefix="/deployment", tags=["deployment"])
api_router.include_router(monitoring.router, prefix="/monitoring", tags=["monitoring"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
