from fastapi import APIRouter
router = APIRouter()
@router.get('/tokens')
def get_tokens():
    return {'status': 'ok'}
