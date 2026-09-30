.PHONY: install dev build lint deploy

install:
	uv sync
	cd site-portfolio && pnpm install

dev:
	cd site-portfolio && pnpm dev

build:
	cd site-portfolio && pnpm build

lint:
	cd site-portfolio && pnpm lint

deploy:
	cd site-portfolio && pnpm run deploy -- $(ARGS)
