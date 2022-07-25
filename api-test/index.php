<?php 

  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  $dominioPermitido = "http://localhost:3000";
  header("Access-Control-Allow-Origin: $dominioPermitido");
  header("Access-Control-Allow-Headers: content-type");
  header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");


  $method = $_SERVER['REQUEST_METHOD'];
  require_once './controller/controller_places.php';
  use Controller\ControllerPlaces;

  // echo "Testing ".$method;

  switch ($method) {
    case 'GET':

      $path = explode('/', $_SERVER['REQUEST_URI']);
      $pathName = $path[count($path)-1];
      $places = new ControllerPlaces; 
      
      switch ($pathName) {
        case 'ventas':
          $placesVentas = $places->ventas();

          echo json_encode($placesVentas);
          break;
        case 'places':
         
          $places = $places->places();
    
          foreach ($places as $key => $place) {
            $dataPlaces[] = [
              'id' => (int)$place->id,
              'description' => $place->descripcion,
              'position' => [
                'lat' => (float)$place->latitud,
                'lng' => (float)$place->longitud
              ],
              'zona' => $place->zona,
              'venta' => $place->venta,
              'nombre' => ""
              ];
            }
      
            echo json_encode($dataPlaces);
          break;
       
      }

      break;
    
    default:
      # code...
      break;
  }

   
  
  
  // require_once './conexion/conexion.php';
  // $x = '\conexion\Proyecto\Connection';
  // use Conexion\Connection;

  // $connection = new Connection;

  // $connection = $connection->run();

  // $stmt_places = $connection->prepare('SELECT * FROM places');

  // $stmt_places->setFetchMode(PDO::FETCH_ASSOC);

  // $stmt_places->execute();

  // while ($row = $stmt_places->fetch()) {
  //   # code...
  //   echo $row["descripcion"]."<br>";
  // }

  

 
?>