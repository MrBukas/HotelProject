select room_id, date_format(start_date, '%d.%m.%Y'), date_format(leave_date, '%d.%m.%Y')
from accomodations
where start_date > '2021-12-1'
  and leave_date < '2021-12-31'
order by room_id, start_date;

select distinct room_name
from rooms;


# Инфо о заселении
select a.client_id,
       c.fio client_fio,
       c.phone_number number,
       date_format(a.start_date, '%d.%m.%Y') start,
       date_format(leave_date, '%d.%m.%Y') end,
       a.room_id roomid,
       r.room_name roomname
from accomodations a
         join clients c on c.id = a.client_id
         join rooms r on r.room_id = a.room_id
where start_date <= '2021-12-12'
  and leave_date > '2021-12-12'
  and a.room_id = 101;

select a.room_id                           room,
       r.room_name,
       date_format(start_date, '%d.%m.%Y') start,
       date_format(leave_date, '%d.%m.%Y') leaved
from accomodations a
         join rooms r on r.room_id = a.room_id
where start_date > '2021-11-1'
  and leave_date < '2021-11-31'
order by a.room_id, start_date;

INSERT INTO slavyanka.clients (fio, document_type, document_id, phone_number, comment)
VALUES ('BykanovNS',
        DEFAULT,
        null,
        null,
        null);

INSERT INTO slavyanka.accomodations (client_id, room_id, start_date, leave_date, total_paid)
VALUES (1, 101, '2021-11-03 21:25:42', '2021-11-12 21:25:51', null)

select a.client_id,
       c.fio client_fio,
       c.phone_number number,
       date_format(a.start_date, '%d.%m.%Y') start,
       date_format(leave_date, '%d.%m.%Y') end,
       a.room_id roomid,
       r.room_name roomname
from accomodations a
         join clients c on c.id = a.client_id
         join rooms r on r.room_id = a.room_id
where start_date <= '2021-11-7 00:00:00'
  and leave_date >= '2021-11-7 00:00:00'
  and a.room_id = 101