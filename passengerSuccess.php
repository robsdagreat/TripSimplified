<?php 
include('connection.php');

if(isset($_POST['send']))
{
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $id=$_POST['id'];
    $email=$_POST['email'];
    $password=password_hash($_POST['password'],PASSWORD_DEFAULT);
    $password_confirm=$_POST['password'];
    //insert into database
    $insert="INSERT INTO passenger(FNAME,LNAME,ID,EMAIL,PASSWORD) VALUES('$fname','$lname',$id,'$email','$password')";
    if(mysqli_query($conn,$insert))
    {
        echo"New passenger inserted successfully!!";
        header('location:loginstaff.php');
    }
    else{
        echo"Failed".mysqli_connect_error();
    }



}