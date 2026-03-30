# joaquimcosta.dev

Personal portfolio and blog for [Joaquim Costa](https://joaquimcosta.dev) — Staff Software Engineer specializing in backend systems, microservices, and cloud-native architecture.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Docker / Docker Compose

## Features

- Responsive design with dark/light mode
- SEO optimized (sitemap, robots.txt, Open Graph, JSON-LD structured data)
- Resume PDF download
- Project showcase with internal/external project handling
- Photo carousel with personal images

## Getting Started

**Prerequisites:** Node.js 20+ and npm

```bash
# Clone the repository
git clone https://github.com/joaquimscosta/joaquimcosta.dev.git
cd joaquimcosta.dev

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

## Docker

```bash
cd docker
docker compose up --build
```

## Project Structure

```text
src/
├── app/           # Pages (home, about, projects, uses, articles)
├── components/    # Shared UI components (Header, Footer, Card, etc.)
├── images/        # Photos, logos, and avatar
├── lib/           # Utilities (article loader, date formatting)
└── styles/        # Tailwind CSS entry point
public/
└── resume.pdf     # Downloadable resume
docker/
├── Dockerfile
└── docker-compose.yml
```

## License

This project is based on the [Spotlight](https://tailwindui.com/templates/spotlight) template by Tailwind UI. Please respect the original license terms.
