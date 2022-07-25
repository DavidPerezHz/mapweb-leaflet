<?php namespace Model;

require_once './conexion/conexion.php';

use Conexion\Connection;

class Places //extends AnotherClass
{
  private $connection;
  
  public function __construct() {
    $this->connection = new Connection;
  }

  public function getAllPlaces() {

    $connect = $this->connection->run();

    $stmt_places = $connect->prepare('SELECT * FROM places');
    $stmt_places->setFetchMode(\PDO::FETCH_OBJ);
    $stmt_places->execute();

    return $stmt_places->fetchAll();
  }

  public function getVentas() {
    $connect = $this->connection->run();

    $stmt_places = $connect->prepare('SELECT zona, SUM(venta) as total FROM places GROUP BY zona');
    $stmt_places->setFetchMode(\PDO::FETCH_OBJ);
    $stmt_places->execute();

    return $stmt_places->fetchAll();
  }
  
}


