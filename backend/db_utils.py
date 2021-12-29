import mysql.connector as my_conn
import sqlite3

def get_db():
    sqlite_connection = sqlite3.connect("C:\\Users\\Nikita\\PycharmProjects\\Hotel_db\\backend\\hotel.sqlite3")
    return sqlite_connection
    # user = "root"
    # password = "1234"
    # host = "127.0.0.1"
    # database = "slavyanka"
    # conn = my_conn.connect(
    #     user=user,
    #     password=password,
    #     host=host,
    #     database=database
    # )
    # return conn
    # with connect(
    #     host="127.0.0.1",
    #     port=3306,
    #     user="root",
    #     password="1234",
    # ) as connection:
    #     return connection