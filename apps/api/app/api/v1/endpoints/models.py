from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_models():
    return {'status': 'ok'}
