# Work

Next.js portfolio in `site-portfolio/`, managed with pnpm. Root Python toolchain is uv (`pyproject.toml`).

```bash
make install   # uv sync + pnpm install
make dev       # next dev
make build     # static export → site-portfolio/out
make deploy    # gh-pages from out/
```

Node 22+ with pnpm via `corepack enable`. Install [uv](https://docs.astral.sh/uv/) for the root sync.
