-- drop database LumusSave;

create database LumusSave;
use LumusSave;

create table Empresa (
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
CNPJ char(18),
segmento varchar(45),
endereco varchar(100)
) auto_increment = 100; 


create table Usuario (
idUsuario int auto_increment,
nomeCompletoUsuario varchar(60),
apelidoUsuario varchar(30),
senhaUsuario varchar(20),
emailUsuario varchar(60),
telefoneUsuario char(11),
cargoUsuario varchar(30),
fkEmpresa int,
primary key (idUsuario, fkEmpresa),
foreign key (fkEmpresa) references Empresa(idEmpresa)
);

create table ambienteEmpresa(
idAmbiente int auto_increment,
nomeAmbiente varchar(45),
alertaVermelho varchar(45),
alertaAmarelo varchar(45),
alertaVerde varchar(45),
fkEmpresa int,
primary key (idAmbiente, fkEmpresa),
foreign key (fkEmpresa) references Empresa(idEmpresa)
);

create table Sensor(
idSensor int primary key auto_increment,
descricaoPosicao varchar(45),
fkAmbiente int,
fkEmpresa int,
foreign key (fkAmbiente) references ambienteEmpresa(idAmbiente),
foreign key (fkEmpresa) references ambienteEmpresa(fkEmpresa)
);

-- Atenção: 3 foreign keys (nas tabelas Usuario, ambienteEmpresa e Sensor) com o mesmo nome (fkEmpresa)

create table dadosSensor(
    idDados int auto_increment,
    valorLux int,
    dataHora datetime,
    fkSensor int,
    primary key (idDados, fkSensor),
	foreign key (fkSensor) references Sensor(idSensor)
);

-- INSERINDO VALORES

insert into Empresa values
(null, 'Nubank', '30.680.829/0001-43', 'Financeira','Rua Capote Valente, 39 - Pinheiros, São Paulo'),
(null, 'C6 Bank', '31.872.495/0001-72', 'Financeira', 'Av. Nove de Julho, 3186 - Jardim Paulista, São Paulo'),
(null, 'Ifood', '14.380.200/0001-21', 'Conveniência','Av. dos Autonomistas, 1496 - Vila Yara, Osasco'),
(null, 'Santander', '90.400.888/0001-42', 'Financeira','Av. Presidente Juscelino Kubitschek, 2235 - Vila Olimpia'),
(null, 'B3', '09.346.601/0001-25', 'Financeira','Rua Quinze de Novembro, 275 - Centro Histórico de São Paulo'),
(null, 'Samsung', '00.280.273/0002-18', 'Eletrônicos','Av. Dr Chucre Zaidan, 1240 Diamond Tower, Morumbi Corporate - Vila Cordeiro');

insert into ambienteEmpresa (nomeAmbiente, alertaVermelho, alertaAmarelo, alertaVerde, fkEmpresa) values
('escritorio', 'Alto', 'Médio', 'Baixo', 100),
('refeitorio', 'Alto', 'Médio', 'Baixo', 101),
('corredor', 'Alto', 'Médio', 'Baixo', 102),
('banheiro', 'Alto', 'Médio', 'Baixo', 100),
('salaReuniao', 'Alto', 'Médio', 'Baixo', 101),
('salaTrabalho', 'Alto', 'Médio', 'Baixo', 102);

insert into Sensor (descricaoPosicao, fkAmbiente) values
('Sensor 1', 1),
('Sensor 2', 2),
('Sensor 3', 1),
('Sensor 4', 3),
('Sensor 5', 2),
('Sensor 6', 3);

select * from ambienteEmpresa;
-- exibir todos os dados da tabela empresa
select * from Empresa;

-- exibir todos os dados da tabela empresa e usuario 
select * from Empresa join Usuario on fkEmpresa = idEmpresa; 

-- exibir todos os dados da tabela ambienteEmpresa e dadosSensor
select * from ambienteEmpresa 
join Sensor 
    ON ambienteEmpresa.idAmbiente = Sensor.fkAmbiente;

-- exibir todos os dados da tabela ambienteEmpresa, sensor e dadosSensor
select * from ambienteEmpresa 
join Sensor 
    ON ambienteEmpresa.idAmbiente = sensor.fkAmbiente
join dadosSensor 
    ON sensor.idSensor = dadosSensor.fkSensor;

-- exibir o valor máximo e minimo da tabela dadosSensor
select MAX(valorLux) AS ValorMaximo, MIN(valorLux) AS ValorMinimo from dadosSensor;


-- exibir a quantidade de valorLux da tabela dadosSensor que é maior ou igual a um alerta vermelho
select COUNT(*) AS Quantidade
from dadosSensor
join Sensor 
    ON dadosSensor.fkSensor = Sensor.idSensor
join ambienteEmpresa 
    ON Sensor.fkAmbiente = ambienteEmpresa.idAmbiente
where dadosSensor.valorLux >= ambienteEmpresa.alertaVermelho;


select valorLux as lux, dataHora, 
	DATE_FORMAT(dataHora,'%H:%i:%s') as momento  from dadosSensor
		order by idDados desc limit 7;
        
select * from dadosSensor;

insert into dadosSensor(valorLux, dataHora) values
(800, '2023-11-25 13:55:01');