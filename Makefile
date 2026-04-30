.PHONY: help build up down test lint migrate ingest-costs analyze-usage optimize-routing generate-report

help:
	@echo "LLM Cost Optimizer - Management Commands"
	@echo "---------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "ingest-costs    : Trigger LLM provider cost and token ingestion"
	@echo "analyze-usage   : Execute AI usage and performance analysis"
	@echo "optimize-routing: Orchestrate LLM model routing and prompt optimization"
	@echo "generate-report : Create executive AI FinOps report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

ingest-costs:
	docker-compose exec api python scripts/ingest/fetch_provider_data.py

analyze-usage:
	docker-compose exec api python scripts/analyze/compute_kpis.py

optimize-routing:
	docker-compose exec api python scripts/optimize/router_recommendations.py

generate-report:
	docker-compose exec api python scripts/report/create_finops_summary.py
