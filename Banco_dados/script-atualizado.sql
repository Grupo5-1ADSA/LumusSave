create database LumusSave;
use LumusSave;

create table empresas(
    idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(45),
    CNPJ char(18),
    segmento varchar(45),
    endereco varchar(200)
);

alter table empresas auto_increment =100;

create table usuario(
    idUsuario int primary key auto_increment,
    nomeUsuario varchar(90),
    senhaUsuario varchar(45),
    emailUsuario varchar(100),
    telefoneUsuario char(11),
    cargoUsuario varchar(45),
    fkempresa int,
    constraint fkempresa foreign key (fkempresa) references empresas(idEmpresa)
);

create table ambienteEmpresa(
    idAmbiente int primary key auto_increment,
    nomeAmbiente varchar(45),
    alertaVermelho varchar(45),
    alertaAmarelo varchar(45),
    alertaVerde varchar(45),
    fkempresa_ambiente int,
    constraint fkempresa_ambiente foreign key ambienteEmpresa(fkempresa_ambiente) references empresas(idEmpresa)
);


create table sensor(
    serialNumber int primary key auto_increment,
    descricaoPosicao varchar(200),
    fkambiente_sensor int,
    constraint fkambiente_sensor foreign key sensor(fkambiente_sensor) references ambienteEmpresa(idAmbiente)
);

create table dadosSensor(
    idDados int primary key auto_increment,
    valorLux int,
    dataHora datetime,
    fkSensor int,
    constraint fkSensor foreign key dadosSensor(fkSensor) references sensor(serialNumber)
);


insert into empresas values
(null, 'Nubank', '30.680.829/0001-43', 'Financeira','Rua Capote Valente, 39 - Pinheiros, São Paulo'),
(null, 'C6 Bank', '31.872.495/0001-72', 'Financeira', 'Av. Nove de Julho, 3186 - Jardim Paulista, São Paulo'),
(null, 'Ifood', '14.380.200/0001-21', 'Conveniência','Av. dos Autonomistas, 1496 - Vila Yara, Osasco'),
(null, 'Santander', '90.400.888/0001-42', 'Financeira','Av. Presidente Juscelino Kubitschek, 2235 - Vila Olimpia'),
(null, 'B3', '09.346.601/0001-25', 'Financeira','Rua Quinze de Novembro, 275 - Centro Histórico de São Paulo'),
(null, 'Samsung', '00.280.273/0002-18', 'Eletrônicos','Av. Dr Chucre Zaidan, 1240 Diamond Tower, Morumbi Corporate - Vila Cordeiro');

insert into ambienteEmpresa (nomeAmbiente, alertaVermelho, alertaAmarelo, alertaVerde, fkempresa_ambiente) values
('escritorio', 'Alto', 'Médio', 'Baixo', 1),
('refeitorio', 'Alto', 'Médio', 'Baixo', 2),
('corredor', 'Alto', 'Médio', 'Baixo', 3),
('banheiro', 'Alto', 'Médio', 'Baixo', 1),
('salaReuniao', 'Alto', 'Médio', 'Baixo', 2),
('salaTrabalho', 'Alto', 'Médio', 'Baixo', 3);

INSERT INTO sensor (descricaoPosicao, fkambiente_sensor)
VALUES
('Sensor 1', 1),
('Sensor 2', 2),
('Sensor 3', 1),
('Sensor 4', 3),
('Sensor 5', 2),
('Sensor 6', 3);


-- exibir todos os dados da tabela empresa
select * from empresas;

--exibir todos os dados da tabela empresa e usuario 
select * from empresas join usuario on fkempresa=idEmpresa; 

--exibir todos os dados da tabela ambienteEmpresa e dadosSensor
select * from ambienteEmpresa 
join sensor 
    ON ambienteEmpresa.idAmbiente = sensor.fkambiente_sensor

--exibir todos os dados da tabela ambienteempresa, sensor e dadosSensor
select * from ambienteEmpresa 
join sensor 
    ON ambienteEmpresa.idAmbiente = sensor.fkambiente_sensor
join dadosSensor 
    ON sensor.serialNumber = dadosSensor.fkSensor;

--exibir o valor máximo e minimo da tabela dadosSensor
select MAX(valorLux) AS ValorMaximo, MIN(valorLux) AS ValorMinimo from dadosSensor;

--exibir a quantidade de valorLux da tabela dadosSensor que é maior ou igual a um alerta vermelho
select COUNT(*) AS Quantidade
from dadosSensor
join sensor 
    ON dadosSensor.fkSensor = sensor.serialNumber
from ambienteEmpresa 
    ON sensor.fkambiente_sensor = ambienteEmpresa.idAmbiente
where dadosSensor.valorLux >= ambienteEmpresa.alertaVermelho;
