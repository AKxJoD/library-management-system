# Library Management System

A full-stack Library Management System built with **PHP, MySQL, HTML, CSS and JavaScript**.

## Features
- Admin login and session authentication
- Dashboard with live statistics
- Add, edit and delete books
- Add, edit and delete members
- Issue and return books
- Automatic due dates and fine calculation
- Transaction history
- Search and status filters
- MySQL database with relational tables
- Prepared statements and password hashing
- Responsive admin interface

## Requirements
- XAMPP (Apache + MySQL)
- PHP 8.0+
- MySQL 5.7+ / MariaDB

## Setup
1. Copy the project into `xampp/htdocs/library-management-system`.
2. Start Apache and MySQL from XAMPP.
3. Open phpMyAdmin and import `database/library_management.sql`.
4. Check database settings in `config/database.php`.
5. Open `http://localhost/library-management-system/`.
6. Default admin login: `admin@library.com` / `admin123`.

## Project structure
- `index.php` - login and dashboard entry
- `books.php` - book CRUD
- `members.php` - member CRUD
- `transactions.php` - issue, return and transaction history
- `config/database.php` - PDO database connection
- `includes/auth.php` - authentication helpers
- `includes/header.php` / `footer.php` - shared layout
- `assets/style.css` - responsive styling
- `assets/app.js` - client-side interactions
- `database/library_management.sql` - database schema and seed data

> GitHub Pages cannot run PHP/MySQL. Use XAMPP locally or PHP-compatible hosting for the backend.
