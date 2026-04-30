from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_deployment():
    return {'status': 'ok', 'mlops_component': 'deployment'}
