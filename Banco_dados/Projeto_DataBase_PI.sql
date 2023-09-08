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
	tipoUsuario char(5) not null,
	constraint usuario check (tipoUsuario ='admin' or tipoUsuario = 'comum'));

create table sensor
	(idSensor int primary key auto_increment,
	nomeSensor varchar(60),
	localizacao varchar(50) not null);

create table dadoSensor
	(idDado int primary key auto_increment,
	valorLux int,
	dataHora datetime,
	idSensor int);

desc Empresa;
desc usuario;
desc sensor;
desc dadoSensor;

insert into empresa value
	(null, 'Petrobras', 'Petroleo', 1, 'Av. Alberto Soares Sampaio', 'SP', '08007289001', 'petrobras@petrobras.com.br', '33.000.167/0001-01'),
	(null, 'Bandeirante Quimica', 'Produtos quimicos', 1, 'Av. Alberto Soares Sampaio', 'SP', '(11)36125600', 'band@bandeirante.com.br', '47.854.831/0001-94'),
	(null, 'Brasken', 'Petroquimica de energia eletrica', 1, 'Av. Presidente Costa e Silva', 'SP', '(11)44781515', 'brasken@brasken.com.br', '42.150.391/0040-87'),
	(null, 'Banco do Brasil SA', 'Instituição financeira', 1, 'Rua Senador Flaquer', 'SP', '(11)40033001', 'bb@bancodobrasil.com.br', '00.000.000/0001-91');

select * from empresa;

insert into usuario value
	(null, 'Alex Brawn', 2, 'sptech2023', 'alex@bandeirante.com.br', '99887-7665', 'admin'),
	(null, 'Bob Grey', 3, 'sptech2023', 'bob@brasken.com.br', '98877-6655', 'comum'),
	(null, 'Monica Araujo', 1, 'sptech2023', 'monica@petrobras.com.br', '97766-5544', 'comum'),
	(null, 'Castro Manuel', 4, 'sptech2023', 'castro@bancodobrasil.com.br', '95544-3322', 'admin');

select * from usuario;

insert into sensor value
	(null, 'Luminosidade', 'Escritorio'),
	(null, 'Luminosidade', 'Recepção'),
	(null, 'Luminosidade', 'Escritorio'),
	(null, 'Luminosidade', 'Recepção');

select * from sensor;

insert into dadoSensor value
	(null, 1000, '2023-09-10 10:40:34', 1),
	(null, 1000, '2023-09-13 15:25:19', 1),
	(null, 1000, '2023-09-09 08:33:48', 1),
	(null, 1000, '2023-09-15 17:15:52', 1);

select * from dadoSensor;
