install-frontend:
	@cd frontend && npm install

install-backend:
	@cd backend && uv sync

install: install-frontend install-backend

start-frontend:
	@cd frontend && npm run dev

start-backend:
	@cd backend && uv run fastapi dev main.py

dev: 
	@npx concurrently -n "backend,frontend" -c "blue,green" "${MAKE} start-backend" "${MAKE} start-frontend"
