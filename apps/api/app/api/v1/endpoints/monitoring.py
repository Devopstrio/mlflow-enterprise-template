from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_monitoring():
    return {'status': 'ok', 'mlops_component': 'monitoring'}
