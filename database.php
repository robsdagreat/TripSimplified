<?php
$host='localhost';
$user='';
$password='';
$dbname='';
//1.mysqli_connect():mysql procedure
//2. new mysqli():
//3.pdo

$conn=mysqli_connect('localhost','root','','');
if(!$conn)
{
echo"ERROR::";
}
$sql="CREATE DATABASE tripSimplified";
//binding or read from database
$result=mysqli_query($conn,$sql);
if($result)
{
    printf("Database created success!");
}
else{
    printf("Backend error::".mysqli_connect_error());
}