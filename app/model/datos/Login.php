<?php

class Login implements JsonSerializable {

    private $idlogin;
    private $useer;
    private $pass;
    private $superlogin;
    private $usuario;
    private $tipologin;

    public function __construct($user = "", $pass = "", $superlogin = false, Usuario $usuario = null, TipoLogin $tipo = null) {
        $this->useer = $user;
        $this->pass = $pass;
        $this->superlogin = $superlogin;
        $this->usuario = $usuario;
        $this->tipologin = $tipo;
    }

    public function getIdlogin(){
        return $this->idlogin;}
    public function setIdlogin($idlogin){
        $this->idlogin = $idlogin;}

    public function getUseer(){
        return $this->useer;}
    public function setUseer($user){
        $this->useer = $user;}

    public function getPass(){
        return $this->pass;}
    public function setPass($pass){
        $this->pass = $pass;}

    public function getsuperlogin(){
        return $this->superlogin;}
    public function setsuperlogin($superlogin){
        $this->superlogin = $superlogin;}

    public function getUsuario(){
        return $this->usuario;}
    public function setUsuario($usuario){
        $this->usuario = $usuario;}

    public function getTipologin(){
        return $this->tipologin;}
    public function setTipologin(TipoLogin $tipologin){
        $this->tipologin = $tipologin;}
        
        
    public function jsonSerialize() {
        return [
            'useer' => $this->useer,
            'idtipologin' => $this->tipologin
        ];
    }
    
}
?>