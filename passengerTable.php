<?php

$conn=mysqli_connect('localhost','root','','tripSimplified');
if(!$conn)
{
    echo"Table passenger failed to be crated!";
}
//create table
$create="CREATE TABLE passenger (FNAME TEXT(45),LNAME TEXT(45),ID INT(16) PRIMARY KEY ,EMAIL VARCHAR(125),PASSWORD VARCHAR(255))";
$query=mysqli_query($conn,$create);

if($query)
{
    echo"your table success";
}
else{
    echo"table error::".mysqli_connect_error();
}