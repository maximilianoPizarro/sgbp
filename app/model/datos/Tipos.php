<?php

class TipoLogin implements JsonSerializable {
    
    private $idtipologin;
    private $tipologin;

    public function __construct($tipologin = "") {
        $this->tipologin = $tipologin;
    }
    
    public function getIdtipologin(){
        return $this->idtipologin;}
    public function setIdtipologin($idtipologin){
            $this->idtipologin = $idtipologin;}
            
    public function getTipologin(){
        return $this->tipologin;}
    public function setTipologin($tipologin){
        $this->tipologin = $tipologin;}
     
        
    public function jsonSerialize() {
        return [
            'tipologin' => $this->tipologin
        ];
    }
    
}


class TipoInfraccion implements JsonSerializable {
    
    private $idtipoinfraccion;
    private $tipoinfraccion;
    private $abreviacion;
    private $lstinfraccion = array();
    
    public function __construct($tipoinfrac = "", $abrev = "") {
        $this->tipoinfraccion = $tipoinfrac;
        $this->abreviacion = $abrev;
    }
    
    public function getIdtipoinfraccion(){
        return $this->idtipoinfraccion;}
    public function setIdtipoinfraccion($idtipoinfraccion){
        $this->idtipoinfraccion = $idtipoinfraccion;}

    public function getTipoinfraccion(){
        return $this->tipoinfraccion;}
    public function setTipoinfraccion($tipoinfraccion){
        $this->tipoinfraccion = $tipoinfraccion;}

    public function getAbreviacion(){
        return $this->abreviacion;}
    public function setAbreviacion($abreviacion){
        $this->abreviacion = $abreviacion;}
        
    public function getLstinfraccion(){
        return $this->lstinfraccion;}
    public function setLstinfraccion($lstinfraccion){
        $this->lstinfraccion = $lstinfraccion;}
        
        public function jsonSerialize() {
            return [
                'abreviacion' => $this->abreviacion
            ];
        }
      
}


class TipoPersonal implements JsonSerializable {
    
    private $idtipopersonal;
    private $tipopersonal;
    
    public function  __construct($tipo = "") {
        $this->tipopersonal = $tipo;
    }
    
    public function getIdtipopersonal(){
        return $this->idtipopersonal;}
    public function setIdtipopersonal($idtipopersonal){
        $this->idtipopersonal = $idtipopersonal;}
            
    public function getTipopersonal(){
        return $this->tipopersonal;}
    public function setTipopersonal($tipopersonal){
        $this->tipopersonal = $tipopersonal;}
             
        
    public function jsonSerialize() {
        return [
            'id'=>$this->idtipopersonal, 
            'tipopersonal' => $this->tipopersonal
        ];
    }
}


class TipoDominio implements JsonSerializable {
    
    private $idtipodominio;
    private $tipodominio;
    
    public function __construct($tipo = "") {
        $this->tipodominio = $tipo;
    }
    
    public function getIdtipodominio(){
        return $this->idtipodominio;}
    public function setIdtipodominio($idtipodominio){
        $this->idtipodominio = $idtipodominio;}

    public function getTipodominio(){
        return $this->tipodominio;}
    public function setTipodominio($tipodominio){
        $this->tipodominio = $tipodominio;}
        
        
    public function jsonSerialize() {
        return [
            'id'=>$this->idtipodominio, 
            'tipodominio' => $this->tipodominio
        ];
    }
    
    public function unjsonSerialize($json) {
        if(isset($json)){
        $this->idtipodominio=$json->id;
        $this->tipodominio=$json->tipodominio;}
    }
    
}


class TipoVehiculo implements JsonSerializable {
    
    private $idtipovehiculo;
    private $tipovehiculo;
 
    public function __construct($tipo = "") {
        $this->tipovehiculo = $tipo;
    }
    
    public function getIdtipovehiculo(){
        return $this->idtipovehiculo;}
    public function setIdtipovehiculo($idtipovehiculo){
        $this->idtipovehiculo = $idtipovehiculo;}

    public function getTipovehiculo(){
        return $this->tipovehiculo;}
    public function setTipovehiculo($tipovehiculo){
        $this->tipovehiculo = $tipovehiculo;}

        
    public function jsonSerialize() {
        return [
            'id'=>$this->idtipovehiculo, 
            'tipovehiculo' => $this->tipovehiculo
        ];
    }
    
    public function unjsonSerialize($json) {
        if(isset($json)){
            $this->idtipovehiculo=$json->id;
            $this->tipovehiculo=$json->tipovehiculo;}
    }
    
}


class TipoDocumento implements JsonSerializable {
    
    private $idtipodocumento;
    private $tipodocumento;
    
    public function __construct($tipodoc = "") {
        $this->tipodocumento = $tipodoc;
    }
    
    public function getIdtipodocumento(){
        return $this->idtipodocumento;}
    public function getTipodocumento(){
        return $this->tipodocumento;}

    public function setIdtipodocumento($idtipodocumento){
        $this->idtipodocumento = $idtipodocumento;}
    public function setTipodocumento($tipodocumento){
        $this->tipodocumento = $tipodocumento;}
        
        public function jsonSerialize() {
            return [
                'id'=>$this->idtipodocumento, 
                'tipodocumento' => $this->tipodocumento
            ];
        }
  
}

?>