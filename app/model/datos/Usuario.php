<?php

class Usuario implements JsonSerializable {
    
    private $idusuario;
    private $dni;
    private $nombre;
    private $apellido;
    private $email;
    private $login;
    
    public function __construct($nombre = "", $apellido = "", $dni = "", $email = "", Login $login = null) {
        $this->dni = $dni;
        $this->apellido = $apellido;
        $this->nombre = $nombre;
        $this->email = $email;
        $this->login = $login;
    }
    
    
    public function getIdusuario(){
        return $this->idusuario;}
    public function setIdusuario($idusuario){
        $this->idusuario = $idusuario;}

    public function getDni(){
        return $this->dni;}
    public function setDni($dni){
        $this->dni = $dni;}
        
    public function getNombre(){
        return $this->nombre;}
    public function setNombre($nombre){
        $this->nombre = $nombre;}

    public function getApellido(){
        return $this->apellido;}
    public function setApellido($apellido){
        $this->apellido = $apellido;}
        
    public function getEmail(){
        return $this->email;}       
    public function setEmail($email){
        $this->email = $email;}
        
    public function getLogin(){
        return $this->login;}
    public function setLogin($login){
        $this->login = $login;}

    
    public function jsonSerialize() {
        return [
            'dni' => $this->dni,
            'nombre' => $this->nombre,
            'apellido' => $this->apellido,
            'email' => $this->email,
            'login' => $this->login,
            'apellidonombre' => $this->apellido . " " . $this->nombre
        ];
    }

}

?>