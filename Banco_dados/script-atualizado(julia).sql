create database LumusSave;
use LumusSave;

create table empresas(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
CNPJ char(18),
segmento varchar(45),
endereco varchar(200));
alter table empresas auto_increment =100;

insert into empresas values
(null, 'Nubank', '30.680.829/0001-43', 'Financeira','Rua Capote Valente, 39 - Pinheiros, São Paulo'),
(null, 'C6 Bank', '31.872.495/0001-72', 'Financeira', 'Av. Nove de Julho, 3186 - Jardim Paulista, São Paulo'),
(null, 'Ifood', '14.380.200/0001-21', 'Conveniência','Av. dos Autonomistas, 1496 - Vila Yara, Osasco'),
(null, 'Santander', '90.400.888/0001-42', 'Financeira','Av. Presidente Juscelino Kubitschek, 2235 - Vila Olimpia'),
(null, 'B3', '09.346.601/0001-25', 'Financeira','Rua Quinze de Novembro, 275 - Centro Histórico de São Paulo'),
(null, 'Samsung', '00.280.273/0002-18', 'Eletrônicos','Av. Dr Chucre Zaidan, 1240 Diamond Tower, Morumbi Corporate - Vila Cordeiro');

select * from empresas;

create table usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(90),
senhaUsuario varchar(45),
emailUsuario varchar(100),
telefoneUsuario char(11),
cargoUsuario varchar(45),
fkempresa int,
constraint fkempresa foreign key (fkempresa) references empresas(idEmpresa));

select * from empresas join usuario on fkempresa=idEmpresa; 