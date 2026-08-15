# Library Management System

A full-stack **GitHub Pages + Supabase** Library Management System. The frontend is static and runs directly from GitHub Pages; authentication, database, books, members and lending records run in Supabase.

## Live architecture
- Frontend: HTML, CSS and JavaScript
- Hosting: GitHub Pages
- Authentication: Supabase Auth
- Database: Supabase PostgreSQL
- API: Supabase REST API

## Features
- Account registration and login
- Dashboard statistics
- Cloud database for books and members
- Add books and members
- Issue and return books
- 14-day loan period
- Automatic late fine at ₹10/day
- Transaction history
- Responsive interface
- Persistent data from any device after login

## Run from GitHub
1. Open the repository Settings → Pages.
2. Choose **Deploy from a branch**.
3. Select `main` and `/ (root)`.
4. Save and wait for GitHub Pages to publish.
5. Open `https://akxjod.github.io/library-management-system/`.

The app no longer depends on PHP or XAMPP for the GitHub-hosted version.

## Database
The production Supabase project contains the `books`, `members`, `loans` and `profiles` tables with Row Level Security enabled. The SQL backup remains in `database/library_management.sql`.

## Important
The Supabase publishable key is designed for browser use. Never put a Supabase service-role/secret key in this repository.
