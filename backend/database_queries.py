from datetime import datetime

def get_taken_rooms_query(year, month):
    y = str(year)
    m = str(month)
    query = f"""
    select
    a.room_id room,
    r.room_name room_name,
    date_format(start_date, '%d.%m.%Y') start,
    date_format(leave_date, '%d.%m.%Y') leaved from accomodations a
join rooms r on r.room_id = a.room_id
where start_date > '{y}-{m}-1' and leave_date < '{y}-{m}-31'
order by a.room_id, start_date
    """
    return query


def get_all_rooms():
    return "select distinct room_name from rooms"


def add_client(fio,
        document_id,
        document_type,
        phone_number,
        comment):
    query = f"""
    INSERT INTO slavyanka.clients (fio, document_type, document_id, phone_number, comment) 
    VALUES (
    '{str(fio)}', 
    {"DEFAULT" if document_type is None else "'" + str(document_type) + "'"}, 
    {"null" if document_id is None else "'" + str(document_id) + "'"},
    {"null" if phone_number is None else "'" + str(phone_number) + "'"}, 
    {"null" if comment is None else "'" + str(comment) + "'"}
    )
    """
    return query


def add_visit(
        client_id,
        room_id,
        start_date,
        end_date,
        paid
):
    start = datetime.strptime(str(start_date), '%d.%m.%Y')
    end = datetime.strptime(str(end_date), '%d.%m.%Y')
    query = f"""
    INSERT INTO slavyanka.accomodations (client_id, room_id, start_date, leave_date, total_paid) 
    VALUES (
    {str(client_id)}, 
    {str(room_id)},
    '{start.year}-{start.month}-{start.day} 00:00:00',
    '{end.year}-{end.month}-{end.day} 00:00:00',
    {"null" if paid is None else str(paid)})
    """
    return query

def get_accomodation_query(
        room_id,
        date):
    report_day = datetime.strptime(str(date), '%d.%m.%Y')
    query = f"""
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
where start_date <= '{report_day.year}-{report_day.month}-{report_day.day} 00:00:00'
  and leave_date >= '{report_day.year}-{report_day.month}-{report_day.day} 00:00:00'
  and a.room_id = {str(room_id)}
    """
    return query