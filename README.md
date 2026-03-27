# Gap Based Development

Production-ready [Docusaurus](https://docusaurus.io/) documentation site for the **GBD** project, configured for GitHub Pages deployment through GitHub Actions.

## Project metadata

- Project: `Gap Based Development`
- GitHub owner: `nirnex-ai`
- Repository: `gbd`
- Package manager: `npm`
- Node.js target: `22`
- Trigger branch: `main`
- Deployment branch: `gh-pages` (published by workflow)

## Initial repository wiring

```bash
git remote add origin git@github.com:nirnex-ai/GBD.git
git branch -M main
git push -u origin main
```

## Local setup

```bash
npm install
```

## Local development verification

```bash
npm run start       # Dev server on http://localhost:3000
npm run build       # Production build
npm run serve       # Preview the production build
```

## Deployment

- Automatic deploy: push to `main`
- Manual deploy: run the `Deploy Docusaurus to GitHub Pages` workflow from the GitHub Actions tab
- Workflow file: `.github/workflows/deploy.yml`

## Custom domain (CNAME)

1. Create `static/CNAME` with your domain as a single line, for example:

```text
docs.example.com
```

2. Update `url` in `docusaurus.config.ts` to your custom domain, for example:

```ts
url: 'https://docs.example.com';
baseUrl: '/';
```

3. Keep `baseUrl` aligned to your domain strategy:
- Root domain/subdomain hosting: `baseUrl: '/'`
- Project path hosting: `baseUrl: '/<project>/'`

## Adding new docs pages

1. Create a new Markdown or MDX file in `docs/`.
2. Add or organize it in `sidebars.ts`.
3. Run `npm run start` and verify navigation and content.
4. Commit and push to `main` to deploy.
