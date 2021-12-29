create table accomodations
(
    id               int auto_increment
        primary key,
    client_id        int      not null,
    room_id          int      not null,
    start_date       datetime not null,
    leave_date       datetime null,
    total_paid       int      null,
    administrator_id int      null,
    constraint accomodations_id_uindex
        unique (id),
    constraint administrators_fk
        foreign key (administrator_id) references administrators (id),
    constraint clients_fk
        foreign key (client_id) references clients (id),
    constraint rooms_fk
        foreign key (room_id) references rooms (room_id)
);

create table administrators
(
    id   int auto_increment
        primary key,
    name varchar(100) not null
);

create table clients
(
    id            int auto_increment
        primary key,
    fio           varchar(200)                   not null,
    document_type varchar(100) default 'Паспорт' null,
    document_id   varchar(50)                    null,
    phone_number  varchar(50)                    null,
    comment       varchar(1000)                  null,
    constraint clients_id_uindex
        unique (id)
);

create table rooms
(
    room_id      int           not null
        primary key,
    room_name    varchar(100)  not null,
    person_count int default 2 null,
    price        int           not null,
    floor        int           null
);

