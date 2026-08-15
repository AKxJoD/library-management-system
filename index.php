<?php
require_once __DIR__.'/includes/auth.php';
if (!empty($_SESSION['user_id'])) { header('Location: dashboard.php'); exit; }
$error='';
if ($_SERVER['REQUEST_METHOD']==='POST') {
 $email=trim($_POST['email']??''); $password=$_POST['password']??'';
 $stmt=$pdo->prepare('SELECT * FROM users WHERE email=? LIMIT 1'); $stmt->execute([$email]); $user=$stmt->fetch();
 if ($user && password_verify($password,$user['password'])) { $_SESSION['user_id']=$user['id']; $_SESSION['user_name']=$user['name']; header('Location: dashboard.php'); exit; }
 $error='Invalid email or password.';
}
?><!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Library Management System</title><link rel="stylesheet" href="assets/style.css"></head><body class="login-page"><div class="login-card"><div class="logo">📚</div><h1>Library Management System</h1><p>Admin Portal</p><?php if($error): ?><div class="alert error"><?=e($error)?></div><?php endif; ?><form method="post"><label>Email<input type="email" name="email" value="admin@library.com" required></label><label>Password<input type="password" name="password" required></label><button class="btn primary full">Sign In</button></form><small>Default: admin@library.com / admin123</small></div></body></html>
