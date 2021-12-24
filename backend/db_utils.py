import mysql.connector as my_conn

def get_db():
    user = "root"
    password = "1234"
    host = "127.0.0.1"
    database = "slavyanka"
    conn = my_conn.connect(
        user=user,
        password=password,
        host=host,
        database=database
    )
    return conn
    # with connect(
    #     host="127.0.0.1",
    #     port=3306,
    #     user="root",
    #     password="1234",
    # ) as connection:
    #     return connection