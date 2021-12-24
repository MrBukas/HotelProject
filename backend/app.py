from flask import Flask

from backend.db_utils import get_db
from backend.response_generators import get_monthly_rooms_status, get_rooms_list

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    get_monthly_rooms_status(2021, 11)
    return 'Hello World!'

@app.route('/getrooms')
def getrooms():
    return get_rooms_list()


if __name__ == '__main__':
    app.run()
