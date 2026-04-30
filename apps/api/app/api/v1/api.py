from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, cost, usage, models, optimization, budget, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(cost.router, prefix="/cost", tags=["cost"])
api_router.include_router(usage.router, prefix="/usage", tags=["usage"])
api_router.include_router(models.router, prefix="/models", tags=["models"])
api_router.include_router(optimization.router, prefix="/optimization", tags=["optimization"])
api_router.include_router(budget.router, prefix="/budget", tags=["budget"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
