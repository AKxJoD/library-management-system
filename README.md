# Library Management System

Full-stack PHP + MySQL Library Management System.

### Features
- Admin login/session authentication
- Dashboard statistics
- Book and member CRUD
- Issue/return workflow
- Due dates and automatic fines
- Transaction history
- Search and filters
- PDO prepared statements and password hashing
- Responsive UI

### XAMPP setup
1. Copy to `xampp/htdocs/library-management-system`.
2. Start Apache and MySQL.
3. Import `database/library_management.sql` in phpMyAdmin.
4. Verify `config/database.php`.
5. Open `http://localhost/library-management-system/`.
6. Login with `admin@library.com` / `admin123`.

GitHub Pages does not execute PHP/MySQL. Use XAMPP or PHP-compatible hosting.
