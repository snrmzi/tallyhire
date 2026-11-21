# Tallyhire

A job application tracker for managing your search from first click to final offer.

> Status: in development

## Why I built this

Describe in two or three sentences why you made it. For example: keeping
applications in a spreadsheet got messy, so I built a tool that tracks
status, contacts, and interview dates in one place.

## Planned features

- [ ] Create, edit, and delete job applications
- [ ] Status tracking (Wishlist, Applied, Interview, Offer, Rejected)
- [ ] Kanban board view
- [ ] Search, filter, and sort
- [ ] Contacts and interview events per application
- [ ] Dashboard with response-rate stats
- [ ] Authentication with GitHub login
- [ ] Dark mode and responsive layout
- [ ] CSV export

## Tech stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- PostgreSQL with Prisma
- Auth.js
- Zod
- Vitest and Playwright
- GitHub Actions and Vercel

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Setup

```bash
git clone https://github.com/snrmzi/tallyhire.git
cd tallyhire
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Scripts

| Command             | What it does                  |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the development server  |
| `npm run build`     | Build for production          |
| `npm run lint`      | Run ESLint                    |
| `npm run format`    | Format the code with Prettier |
| `npm run typecheck` | Check TypeScript types        |

## Roadmap

Progress is tracked through commits and the checklist above.

## License

MIT
