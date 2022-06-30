#创建数据库
set names  utf8;
#丢弃数据库，如果存在
drop database if exists lvy;
#创建新的数据库，设置存储字符的编码
create database lvy charset=utf8;
#进入数据库
use lvy;
#创建数据表
create table lvy_user(	
	uid  int primary key  auto_increment,
	uname  varchar(16),
	upwd   varchar(32),
	email  varchar(32),
	phone  varchar(11),
	user_name   varchar(32),
	sex  boolean,
	reg_time  date
);
#插入数据
insert into lvy_user values('1','tao','123456','tao@qq.com','18512345678','涛哥',1,'2021-10-20');
insert into lvy_user values('2','xin','888888','xin@qq.com','18999345678','新哥',1,'2022-1-2');
insert into lvy_user values('3','ming','777777','ming@qq.com','18888345678','铭哥',1,'2021-5-5');