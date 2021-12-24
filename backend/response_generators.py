import pandas as pd
from flask import jsonify

from backend.database_queries import get_taken_rooms_query, get_all_rooms
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

def get_monthly_rooms_status(year, month):
    query = get_taken_rooms_query(year, month)
    df = pd.read_sql(query, get_db())
    print(df)

    rooms = []
    for room in df['room'].unique():
        rooms.append(room)
