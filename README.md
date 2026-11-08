# ScopeMeter

**Protect the margin on every fixed-fee project.**

ScopeMeter is a mobile-friendly, local-first project economics tool for freelancers and small studios. Track time and direct costs against a fixed fee, catch scope drift early, document additional work and build quotes with a profit target.

## Features

- Portfolio dashboard with project health and margin estimates
- Fixed-fee and monthly-retainer projects
- Manual time entries and a running work timer
- Direct expense tracking, CSV exports and printable reports
- **Scope Guard:** record out-of-scope requests, estimate extra hours and fees, track pending/approved/declined decisions, and print a client-facing change-order sheet
- **Quote Lab:** estimate a minimum quote from labor cost, direct expenses, uncertainty buffer and target profit margin
- **Milestone roadmap:** add delivery checkpoints, due dates and completion tracking for each project
- **Invoice tracker:** record invoice references, amounts and due dates; track paid, outstanding and overdue balances without processing payments
- **Task board:** manage project tasks across To do, In progress and Done, with priority, due dates, notes and hour estimates
- **Client directory:** roll up projects, fees, outstanding invoices, logged hours, average margin and open tasks by client
- Portfolio-level outstanding-invoice visibility
- JSON backup and restore
- Responsive layout and basic offline caching as a progressive web app

## Run locally

Open `index.html` in a modern browser. For service-worker/offline support, serve the folder over localhost or HTTPS.

## Deploy with GitHub Pages

1. Open repository **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The included deployment workflow will publish the site on the next push to `main` (or when manually run from the Actions tab).

The repository is public, so the published site and source are public too. Do not put real client names, confidential project details, passwords, API keys or private data in the repository.

## Data and privacy

Project records are stored in browser local storage on the device where you use the app. There is no account, cloud sync, server-side database, automatic email, or payment processing in this version. Clearing browser data can erase local records, so export backups regularly. Importing a backup replaces the current local workspace.

## Important limitations

- A printed change-order sheet is a record for discussion; it is not an e-signature or legally reviewed contract.
- Quote calculations are estimates, not accounting, tax, legal or financial advice. Add relevant overhead, fees and taxes yourself.
- The app has not been independently security-audited. Local browser storage is not a secure vault.
- No revenue or customer demand is guaranteed. Validate with real users before investing in paid infrastructure.

## Roadmap

Potential later work: encrypted cloud sync, user accounts, team collaboration, client portals, invoice PDF templates and payment integrations. Add these only after validating demand, security requirements and feasible payment-provider availability. Add these only after validating demand, security requirements and feasible payment-provider availability.
