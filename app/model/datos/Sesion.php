<?php

class Sesion {
    
    private $idsesion;
    private $login;
    
    public function __construct($login = "") {
        $this->login = $login;
    }
    
    public function getIdsesion(){
        return $this->idsesion;}
        public function setIdsesion($idsesion){
            $this->idsesion = $idsesion;}
            public function getLogin(){
                return $this->login;}
                public function setLogin($login){
                    $this->login = $login;}
      
}

?>