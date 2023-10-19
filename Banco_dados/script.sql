MODELAGEM BANCO DE DADOS

EMPRESA
ID_Empresa (Chave Primária)
Nome
Endereço
Telefone
CPF
CNPJ

USUARIO
ID_Usuário (Chave Primária)
Nome
Email
tipo_usuario 
ID_Empresa (Chave Estrangeira referenciando Empresa)

DADOS
ID_Dados (Chave Primária)
Valor
Data
ID_Usuário (Chave Estrangeira referenciando Usuário)
ID_Localização (Chave Estrangeira referenciando Localização)

DADOSENSOR
ID_DadosSensor (Chave Primária)
TipoSensor
Descrição
DataLeitura
ID_Empresa (Chave Estrangeira referenciando Empresa)

LOCALIZACAO
ID_Localização (Chave Primária)
Latitude
Longitude
Endereço

-- A tabela "Usuário" está relacionada com a tabela "Empresa" por meio da coluna "ID_Empresa" para indicar qual empresa cada usuário está associado.

--A tabela "Dados" está relacionada com a tabela "Usuário" por meio da coluna "ID_Usuário" para registrar quais usuários estão associados a cada conjunto de dados.

--A tabela "Dados" também está relacionada com a tabela "Localização" por meio da coluna "ID_Localização" para armazenar informações sobre onde os dados foram coletados.

--A tabela "DadosSensor" está relacionada com a tabela "Empresa" por meio da coluna "ID_Empresa" para indicar a qual empresa pertencem os sensores.
----------------------------------------------------------------------------------------------

-- Tabela Empresa
CREATE TABLE Empresa (
    ID_Empresa INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Endereço VARCHAR(255),
    Telefone VARCHAR(20),
    Categoria varchar(50),
    CNPJ CHAR(14),
    CPF CHAR(11)
);

-- Tabela Usuário
CREATE TABLE Usuario (
    ID_Usuário INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Senha varchar(255) not null,
    TipoUsuario CHAR(5) not null,
    ID_Empresa INT,
	CONSTRAINT Usuario CHECK (tipoUsuario ='admin' or tipoUsuario = 'comum'),
    FOREIGN KEY (ID_Empresa) REFERENCES Empresa(ID_Empresa)
);

-- Tabela Dados
CREATE TABLE Dados (
    ID_Dados INT AUTO_INCREMENT PRIMARY KEY,
    Valor DECIMAL(10, 2),
    Data DATE,
    ID_Usuário INT,
    ID_Localização INT,
    FOREIGN KEY (ID_Usuário) REFERENCES Usuário(ID_Usuário),
    FOREIGN KEY (ID_Localização) REFERENCES Localização(ID_Localização)
);

-- Tabela DadosSensor
CREATE TABLE DadosSensor (
    ID_DadosSensor INT AUTO_INCREMENT PRIMARY KEY,
    TipoSensor VARCHAR(255),
    Descrição VARCHAR(255),
    DataLeitura TIMESTAMP NOT NULL,
    ID_Empresa INT,
    FOREIGN KEY (ID_Empresa) REFERENCES Empresa(ID_Empresa)
);

-- Tabela Localização
CREATE TABLE Localização (
    ID_Localizacao INT AUTO_INCREMENT PRIMARY KEY,
    Latitude DECIMAL(10, 6),
    Longitude DECIMAL(10, 6),
    Endereço VARCHAR(255)
);

-- Inserir valores na tabela Empresa
INSERT INTO Empresa (Nome, Endereço, Telefone, Categoria, CNPJ, CPF)
VALUES
    ('Empresa B', 'Endereço B', '987-654-3210', 'Manufatura', '98765432109876', '98765432109'),
    ('Empresa C', 'Endereço C', '555-123-4567', 'Serviços', '55555555555555', '12345678901');

-- Inserir valores na tabela Usuario
INSERT INTO Usuario (Nome, Email, Senha, TipoUsuario, ID_Empresa)
VALUES
    ('Admin5', 'admin5@email.com', 'senha123', 'admin', 2),
    ('Comum5', 'comum5@email.com', 'senha456', 'comum', 2),
    ('Admin6', 'admin6@email.com', 'senha789', 'admin', 1),
    ('Comum6', 'comum6@email.com', 'senha012', 'comum', 3);

-- Inserir valores na tabela Localização
INSERT INTO Localização (Latitude, Longitude, Endereço)
VALUES
    (40.123456, -70.654321, 'Endereço Z'),
    (39.987654, -71.987654, 'Endereço W');

-- Inserir valores na tabela DadosSensor
INSERT INTO DadosSensor (TipoSensor, Descrição, DataLeitura, ID_Empresa)
VALUES
    ('Sensor de Luz', 'Medição de intensidade de luz', NOW(), 2),
    ('Sensor de Som', 'Medição de nível de som', NOW(), 1);

-- Inserir valores na tabela Dados
INSERT INTO Dados (Valor, Data, ID_Usuário, ID_Localização)
VALUES
    (19.5, '2023-10-25', 9, 4),
    (22.0, '2023-10-26', 10, 5),
    (26.3, '2023-10-27', 11, 6),
    (30.7, '2023-10-28', 12, 4);

--Selecione todos os dados coletados por um usuário específico e exiba as informações do usuário, localização e sensor:
SELECT 
    Dados.ID_Dados, 
    Usuario.Nome AS NomeUsuario,
    Localizacao.Endereço AS EnderecoLocalizacao, 
    DadosSensor.TipoSensor AS TipoSensor,
    Dados.Valor,
    Dados.Data
FROM Dados
JOIN Usuario ON Dados.ID_Usuário = Usuario.ID_Usuário
JOIN Localizacao ON Dados.ID_Localização = Localizacao.ID_Localização
JOIN DadosSensor ON DadosSensor.ID_DadosSensor = Dados.ID_DadosSensor
WHERE Usuario.Nome = 'Comum1';

--Selecione todas as leituras de sensores feitas por uma empresa específica e mostre as informações da empresa e do sensor:
SELECT 
    DadosSensor.ID_DadosSensor, 
    Empresa.Nome AS NomeEmpresa, 
    DadosSensor.TipoSensor, 
    DadosSensor.Descrição, 
    DadosSensor.DataLeitura
FROM DadosSensor
JOIN Empresa ON DadosSensor.ID_Empresa = Empresa.ID_Empresa
WHERE Empresa.Nome = 'Empresa A';

--Selecione todos os usuários de uma determinada empresa e mostre os dados de usuário e informações da empresa:
SELECT 
    Usuario.ID_Usuário,
    Usuario.Nome AS NomeUsuario, 
    Usuario.Email, 
    Empresa.Nome AS NomeEmpresa
FROM Usuario
JOIN Empresa ON Usuario.ID_Empresa = Empresa.ID_Empresa
WHERE Empresa.Nome = 'Empresa B';

--Selecione todas as leituras de sensores em uma localização específica e exiba as informações da localização e do sensor:
SELECT 
    DadosSensor.ID_DadosSensor, 
    Localizacao.Endereço AS EnderecoLocalizacao, 
    DadosSensor.TipoSensor, 
    DadosSensor.Descrição, 
    DadosSensor.DataLeitura
FROM DadosSensor
JOIN Empresa ON DadosSensor.ID_Empresa = Empresa.ID_Empresa
JOIN Localizacao ON Empresa.ID_Empresa = DadosSensor.ID_Empresa
WHERE Localizacao.Endereço = 'Endereço Z';