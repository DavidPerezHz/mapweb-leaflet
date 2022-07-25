<?php namespace Controller;

require_once './model/places.php';

use Model\Places;

class ControllerPlaces //extends AnotherClass implements Interface
{
  private $modelPlaces;

  public function __construct() {
    $this->modelPlaces = new Places;
  }

  public function places() {
    return $this->modelPlaces->getAllPlaces();
  }

  public function ventas() {
    return $this->modelPlaces->getVentas();
  } 
  
}
