drop table if exists leistungs_paket;

create table leistungs_paket (
    nr integer primary key,
    description varchar not null,
    price integer not null
);

insert into leistungs_paket (nr, description, price) VALUES (1, 'Große Körperpflege', 3162);
insert into leistungs_paket (nr, description, price) VALUES (2, 'Kleine Körperpflege', 2156);

