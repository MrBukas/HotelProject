import pandas as pd
from flask import jsonify

from backend.database_queries import get_taken_rooms_query, get_all_rooms, add_client, add_visit, \
    get_accomodation_query, add_room, get_administrator_query
from backend.db_utils import get_db


def get_rooms_list():
    query = get_all_rooms()
    df = pd.read_sql(query, get_db())
    rooms = []
    for i in range(len(df)):
        rooms.append(df.iloc[i]['room_name'])
    response = {
        "rooms": rooms
    }
    return jsonify(response)


def get_fill_range(start, end):
    st = int(str(start)[0:2])
    en = int(str(end)[0:2])
    return range(st, en, 1)


def get_monthly_rooms_status(year, month, demo=False):
    query = get_taken_rooms_query(year, month)
    print(query)
    df = pd.read_sql(query, get_db())
    print(df)
    rooms = []
    for room in df['room_name'].unique():
        rooms.append(room)
    current_room = str(df.iloc[0]['room_name'])
    day = 0
    rooms = {}
    roomdata = [0] * 31
    for i in range(len(df)):
        line_room = str(df.iloc[i]['room_name'])
        if line_room != current_room:
            rooms[current_room] = roomdata
            current_room = line_room
            roomdata = [0] * 32
        start = df.iloc[i]['start']
        end = df.iloc[i]['leaved']
        for d in get_fill_range(start, end):
            roomdata[d] = 1
    rooms[current_room] = roomdata
    if demo:
        return rooms
    return jsonify({"rooms": rooms})


def create_new_client(
        fio,
        document_id,
        document_type,
        phone_number,
        comment
):
    query = add_client(fio,
                       document_id,
                       document_type,
                       phone_number,
                       comment)

    con = get_db()
    cur = con.cursor()
    cur.execute(query)
    cur.close()
    con.commit()


def add_new_visit(
        client_id,
        room_id,
        start_date,
        end_date,
        paid
):
    query = add_visit(
        client_id,
        room_id,
        start_date,
        end_date,
        paid
    )
    con = get_db()
    cur = con.cursor()
    cur.execute(query)
    cur.close()
    con.commit()

def add_new_room(
        room_id,
        room_name,
        person_count,
        price,
        floor):
    query = add_room(
        room_id,
        room_name,
        person_count,
        price,
        floor
    )
    con = get_db()
    cur = con.cursor()
    cur.execute(query)
    cur.close()
    con.commit()


def add_new_admin(name):
    query = get_administrator_query(name)
    con = get_db()
    cur = con.cursor()
    cur.execute(query)
    cur.close()
    con.commit()


def get_accomodation_report(
        room_id,
        date,
        demo=False):
    query = get_accomodation_query(
        room_id,
        date)

    df = pd.read_sql(query, get_db())
    if len(df) == 0:
        if demo:
            return "Нет размещения на выбранную дату"
        return jsonify({"result": "Нет информации"})
    report = f"""
    Комната: {str(df.iloc[0]['roomname'])}
    Клиент: {str(df.iloc[0]['client_fio'])}
    Номер телефона: {str(df.iloc[0]['number'])}
    Дата заселения: {str(df.iloc[0]['start'])}
    Дата выезда: {str(df.iloc[0]['end'])}
    Ответственный администратор: {str(df.iloc[0]['admin_name'])}
    """
    if demo:
        return report
    return jsonify({"result": report})
