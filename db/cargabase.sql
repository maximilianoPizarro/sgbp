CREATE TABLE public.sesion
(
  idsesion integer NOT NULL DEFAULT nextval('sesion_idsesion_seq'::regclass),
  sesionlogin integer NOT NULL,
  CONSTRAINT sesion_pkey PRIMARY KEY (idsesion)
)

CREATE TABLE public.login
(
  idlogin integer NOT NULL,
  useer character varying(45) NOT NULL,
  pass character varying(45) NOT NULL,
  fktipologin integer NOT NULL,
  superlogin boolean NOT NULL,
  CONSTRAINT login_pkey PRIMARY KEY (idlogin),
  CONSTRAINT fktipologin FOREIGN KEY (fktipologin)
      REFERENCES public.tipologin (idtipologin) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fkusuario FOREIGN KEY (idlogin)
      REFERENCES public.usuario (idusuario) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)


CREATE TABLE public.tipologin
(
  idtipologin integer NOT NULL,
  tipologin character varying(45) NOT NULL,
  CONSTRAINT tipologin_pkey PRIMARY KEY (idtipologin)
)

CREATE TABLE public.usuario
(
  idusuario integer NOT NULL DEFAULT nextval('usuario_idusuario_seq'::regclass),
  dni bigint NOT NULL,
  nombre character varying(45) NOT NULL,
  apellido character varying(45) NOT NULL,
  email character varying(75) NOT NULL,
  bajausuario boolean NOT NULL,
  CONSTRAINT usuario_pkey PRIMARY KEY (idusuario)
)

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (idusuario);

ALTER TABLE ONLY public.tipologin
    ADD CONSTRAINT tipologin_pkey PRIMARY KEY (idtipologin);

ALTER TABLE ONLY public.login
    ADD CONSTRAINT tipologin_pkey PRIMARY KEY (idlogin);

COPY tipologin FROM '/docker-entrypoint-initdb.d/carga/TipoLoginDB.txt' WITH DELIMITER '	' CSV HEADER;

COPY usuario(dni, nombre, apellido, email, bajausuario) FROM '/docker-entrypoint-initdb.d/carga/UsuarioDB.txt' WITH DELIMITER '	' CSV HEADER;

COPY login FROM '/docker-entrypoint-initdb.d/carga/LoginDB.txt' WITH DELIMITER '	' CSV HEADER;




