create database registroEmpresa;

create table empresa
(idEmpresa int primary key auto_increment,
nomeEmpresa varchar(50) not null,
categoria varchar(50),
idSensor int,
endereco varchar(80) not null,
estado char(2),
telefone varchar(12) not null,
email varchar(50) not null unique,
cnpj varchar(18) not null unique);

create table usuario
(idUsuario int primary key auto_increment,
nomeUsuario varchar(50) not null,
idEmpresa int,
senha varchar(255) not null,
email varchar(50) not null unique,
telefone varchar(40) not null,
tipoUsuario char(5) not null unique,
constraint usuario check (usuario ='admin' or usuario = 'comum'));

create table sensor
(idSensor int primary key auto_increment,
nomeSensor varchar(60),
localizacao varchar(50) not null);

create table dadoSensor
(idDado int primary key auto_increment,
valorLux int,
dataHora datetime,
idSensor int);

desc cadastroDeEmpresa;
desc usuario;
desc sensor;
