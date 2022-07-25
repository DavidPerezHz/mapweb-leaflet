<?php namespace Conexion;


class Connection //extends AnotherClass implements Interface
{

  private 
    $host,
    $user,
    $password,
    $db,
    $connPDO;

  public function __construct() {
    $this->user = "root";
    $this->password = "root";
    $this->dbname = "example_test";
    $this->host = "mysql:host=localhost;dbname={$this->dbname}";
  }


  public function run()
  {
    try {

      $this->connPDO = new \PDO($this->host, $this->user, $this->password);
      // echo "Conexión realizada con éxito <br>";

    } catch (PDOException $e){
      echo $e->getMessage();
    }

    return $this->connPDO;
  }
  
}
