<?php

$conn=mysqli_connect('localhost','root','','tripSimplified');
if(!$conn)
{
    echo"connection failed::".mysqli_connect_error();
}
else{
    echo"";
}