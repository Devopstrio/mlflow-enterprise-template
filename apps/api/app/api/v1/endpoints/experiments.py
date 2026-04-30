from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_experiments():
    return {'status': 'ok', 'mlops_component': 'experiments'}
