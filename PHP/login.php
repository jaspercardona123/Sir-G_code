<?php

session_start();
 require_once '../DATABASE/dbconn.php'; // Include your database connection file


 $maxAttempts = 3; // Maximum login attempts allowed
$lockoutTime = 60; // Lockout time in seconds after reaching max attempts

if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
    $_SESSION['last_login_attempt'] = 0;
}

// Check if the "cooldown" key is set in the session
if (!isset($_SESSION['cooldown'])) {
    $_SESSION['cooldown'] = false; // Initialize cooldown flag
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $current_time = time();
    $last_attempt_time = $_SESSION['last_login_attempt'];

    // Check if a cooldown is in effect
    if ($_SESSION['cooldown'] && ($current_time - $last_attempt_time) < $lockoutTime) {
        // Display cooldown message
        $cooldownTime = $lockoutTime - ($current_time - $last_attempt_time);
        echo "<script>
                document.getElementById('cooldownMessage').style.display = 'block';
                document.getElementById('cooldownTime').innerText = $cooldownTime;
             </script>";
        exit();
    }
     $email = $_POST['email'];
     $password = $_POST['passw'];


     // Use prepared statement to prevent SQL injection
     $stmt = $conn->prepare("SELECT * FROM `user_in` WHERE  email=?");
     $stmt->bind_param('s', $email);
     $stmt->execute();
     $result = $stmt->get_result();
     $fetch = $result->fetch_assoc();


     if ($result->num_rows > 0 && password_verify($password, $fetch['passw'])) {
         // Successful login
        
         unset($_SESSION['login_attempts']);
         unset($_SESSION['cooldown']);
         $_SESSION['id'] = $fetch['id'];
         header('location: home.php'); // Redirect to your index page
         exit();
     } else {
         // Failed login attempt
         $_SESSION['login_attempts']++;

        if ($_SESSION['login_attempts'] >= $maxAttempts) {
             $_SESSION['cooldown'] = true;
         }
         // Display error message safely
         echo "<script>alert('Incorrect username or password. Please try again.');</script>";
     }

     // Update the last login attempt time
    $_SESSION['last_login_attempt'] = time();


 }


?>         

<!DOCTYPE html>
<html>
<head>
  <title>Sign In Form</title>
  <link rel="stylesheet" type="text/css" href="../CSS/log.css">
</head>
<body>
  <div class="container">
    <h2>Sign In</h2>
    <form action="" method="POST">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="passw" name="passw" required>
      </div>
      <div class="form-group">
        <input type="submit" name="submit" value="Sign In">
        <p>Don't have an account? Click <a href="../PHP/create.php">Sign up</a>.</p>
      </div>
    </form>
   
  </div>
  </div>

</body>
</html>
