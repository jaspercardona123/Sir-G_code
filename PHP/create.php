<?php

 


if($_SERVER['REQUEST_METHOD'] === 'POST'){
  include '../DATABASE/dbconn.php';
//Getting Post Values
  $fname = trim ($_POST['firstname']);
  $lname = trim($_POST['lastname']);
  $middle = trim($_POST['middlename'] ?? null);
  $suffix = $_POST['suffix'] ?? null;
  $sex = $_POST['sex'];
  $age = $_POST['age'];
  $birth = $_POST['birth'];
  $email = trim($_POST['email']);
  $password = password_hash($_POST['passw'], PASSWORD_BCRYPT);
  $Cpassword =password_hash ($_POST['cpassword'], PASSWORD_BCRYPT);
  $street = trim($_POST['street']);
  $municipality = trim($_POST['municipality']);
  $province = trim($_POST['province']);
  $postal = trim($_POST['postal']);
  $country = $_POST['country'];

 
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$verify_query = mysqli_query($conn, "SELECT email FROM user_in WHERE email='$email'");

if(mysqli_num_rows($verify_query) != 0) {
    echo "<script>alert('This email is used, Try another One Please!');</script>";
    echo "<script>window.history.back();</script>";
} else {
    mysqli_query($conn,"INSERT INTO `user_in`(`firstname`, `lastname`, `middlename`, `suffix`, `sex`, `age`, `birth`, `email`, `passw`, `cpassword`, `street`, `municipality`, `province`, `postal`, `country`) 
    VALUES ('$fname','$lname','$middle','$suffix','$sex','$age','$birth','$email','$password','$Cpassword','$street','$municipality','$province','$postal','$country')");

    echo "<script>alert('You Have Successfully Created An Account!')</script>";
    
    echo "<script>window.location.href='login.php';</script>";
}

}
  


?>

<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
  <link rel="stylesheet" href="../CSS/reg.css">
  
 
</head>
<body>
  <div class="container">
 
    <h1>REGISTRATION FORM</h1>

    <h2>Personal Information</h2>
    <form action="" method="POST" class="form"  onsubmit="return formValidation()"> 
   
    <div class="form-row">
      <div class="form-group">
          
      <input type="text" class="form-control" style=" width: 200px;" id="firstname" name="firstname"
       placeholder="Fistname" autofocus="autofocus" maxlength="20">
      <label for="firstname" class="form-label"> Firstname:</label> 
      <span id="firstnamee" style="color:red"></span>
    
      </div>


      <div class="form-group">
      <input type="text" class="form-control"  style=" width: 200px;" id="middlename" name="middlename "  minlength="2"
       placeholder="Middlename">
      <label for="middlename" class="form-label"> Middlename:</label> 
      <span id="middlenamee" style="color:red "></span> 

      </div>


      <div class="form-group">
      
      <input type="text" class="form-control"  style=" width: 200px;" id="lastname" name="lastname" placeholder="Lastname" maxlength="20" >
      <label for="lastname" class="form-label"> Lastname:</label> 
      <span id="lastnamee" style="color:red"></span>
      </div>

      <div class="form-group">
       
       <select id="sufffix" class="form-control" style=" width: 100px; padding-bottom: 6px; margin-top:0px;" name="suffix"  >
                <option value="" disabled selected >Select Suffix</option>
                <option value="Junior">Jr.</option>
                <option value="Senior">Sr.</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="none">None</option>
         </select>
         <label for="suffixname" class="form-label"> Suffix:</label> 
 
         </div>

     

      
     
      
      </div>
      


      <div class="form-row">
     

        <div class="form-group">
        <select id="sex" class="form-control" style=" width: 260px;" name="sex"  >
               <option value="" disabled selected>Select Sex</option>
               <option value="Male">Male</option>
               <option value="female">Female</option>
        
        </select>
        <label for="sex" class="form-label"> Sex:</label> 


        </div>

        <div class="form-group">
      <input type="date" class="form-control" style="margin-top:5px; padding-bottom: 5px; width: 250px;" name="birth" id="birthdate" placeholder="birth">
      <label for="birth" class="form-label">Birthdate:</label>
      </div>

      <div class="form-group">
      <input type="number" class="form-control" style="margin-top:5px; padding-bottom: 5px; width: 250px;" name="age" id="age" placeholder="Age:" autocomplete="off"  required readonly>
      <label for="age" class="form-label">Age:</label>
      </div>

      
       
      </div>

      
    

      <!-- end of first page -->


     
     
      
      <h3>Log In Information</h3>
      <div class="form-row">
      <div class="form-group">
      <input type="email" class="form-control" style=" width: 250px;" id="email" name="email" placeholder="@gmail.com" >
      <label for="email" class="form-label">Email:</label>
      </div>

      <div class="form-group">
      <input type="password" class="form-control" style=" width: 250px;" id="passw" name="passw" placeholder="Password" maxlength="20" value="<?= $_POST['passw'] ?? null ?>" >
      <label id="password-label" class="form-label">Password:</label>
      <span id="password-strength"></span><br>
      <span style="color: red; font-size: 12px;" id="is-valid-password"></span>
   
       
      </div>

      <div class="form-group">
      <input type="password" class="form-control" style=" width: 250px;" id="cpassword" name="cpassword" placeholder="Confirm Password" maxlength="20" value="<?= $_POST['cpassword'] ?? null ?>"  >
      <label id="confirmpassword-label" class="form-label">Confirm Password:</label> 
      <span style="color: red; font-size: 12px;" id="is-valid-confirmpassword"></span>
      

      </div>


      </div>
      <!-- end of second page -->


    

      <h4>Address</h4>

      <div class="form-row">
      <div class="form-group">
      <input type="text" class="form-control" style=" width: 250px;" id="street" name="street" placeholder="street/barangay" maxlength="20"  >
      <label for="street" class="form-label">Street/Barangay:</label>
      
      </div>
      
      <div class="form-group">
      <input type="text" class="form-control" style=" width: 250px;" id="municipality" name="municipality" placeholder="Municipality" maxlength="20"  >
      <label for="municipality" class="form-label">Municipality:</label> 
      
      </div>

      <div class="form-group">
      <input type="text" class="form-control" style=" width: 250px;" id="province" name="province" placeholder="Province" maxlength="20" >
      <label for="province" class="form-label">Province:</label> 

      </div>

      </div>
      <div class="form-row">
      <div class="form-group"> 
      <input type="text" class="form-control" id="postal" name="postal" placeholder="Zip Code"  maxlength="8" >
      <label for="postal" class="form-label">Zip code:</label>
     
      </div>
      
      <div class="form-group">  
      <input type="text" class="form-control" style=" width: 200px;" id="country" name="country" placeholder="Country" maxlength="20" >
      <label for="country" class="form-label">Country:</label>
    
      </div>
      </div>
      <div class="center-button">
      <button type="submit"  name="submit">Register</button>
      <p style="color:black;">Already have an account? Click  <a href="../PHP/login.php">Login</a>.</p>

      </div>
      </div>

    
    
      <script src="../JS/validation.js"></script>
    

      </form>

     
      
    </div>
    
   
   
      
    </body>
  </html>