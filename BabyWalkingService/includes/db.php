<?php
session_start();
  $host_name = 'db5000072970.hosting-data.io';
  $database = 'dbs67541';
  $user_name = 'dbu232209';
  $password = 'supersecurepassword123';
  $DBH = null;

  try {
    $DBH = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);
  } catch (PDOException $e) {
    echo "Error!: " . $e->getMessage() . "<br/>";
    die();
  }
?>