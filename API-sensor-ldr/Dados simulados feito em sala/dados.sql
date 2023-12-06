-- banco de dados para receber dados do dat-aquino

create database TarefaServidorLocal;
use TarefaServidorLocal;

create table sensor (
idSensor int primary key auto_increment,
lux_adt  decimal(10,2));

-- insert into(lux_adt) values

select * from sensor limit 0, 10000;

CREATE USER 'usuarioRemoto'@'10.18.32.103' IDENTIFIED BY '1234';

GRANT insert ON `tarefaservidorlocal`.sensor TO 'usuarioRemoto'@'10.18.31.103';

GRANT ALL PRIVILEGES ON `tarefaservidorlocal`.sensor TO 'usuarioRemoto'@'10.18.32.103';

FLUSH PRIVILEGES;

select * from mysql.user;

drop user 'usuarioRemoto'@'192.18.35.197';

truncate table sensor;