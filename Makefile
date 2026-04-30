.PHONY: help build up down test lint migrate train-model deploy-model validate-model monitor-drift

help:
	@echo "MLflow Enterprise Platform - Management Commands"
	@echo "-----------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Model validation + API)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "train-model        : Run automated model training pipeline"
	@echo "deploy-model       : Trigger model deployment to registry/serving"
	@echo "validate-model     : Run post-training model validation pipeline"
	@echo "monitor-drift      : Trigger model drift detection and reporting"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/models
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

train-model:
	docker-compose exec api python scripts/train/run_experiment.py

deploy-model:
	docker-compose exec api python scripts/deploy/register_model.py

validate-model:
	docker-compose exec api python scripts/validate/check_metrics.py

monitor-drift:
	docker-compose exec api python scripts/monitor/detect_drift.py
