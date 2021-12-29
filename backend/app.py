from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from backend.response_generators import get_monthly_rooms_status, get_rooms_list, create_new_client, add_new_visit, \
    get_accomodation_report, add_new_admin

app = Flask(__name__)


cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/getstatus', methods=['GET'])
@cross_origin()
def hello_world():  # put application's code here
    year = request.args.get('year')
    month = request.args.get('month')
    return get_monthly_rooms_status(year, month)
    # return 'Hello World!'


@app.route('/getrooms', methods=['GET'])
@cross_origin()
def getrooms():
    return get_rooms_list()


@app.route('/addclient', methods=['POST'])
@cross_origin()
def addclient():
    fio = request.args.get('fio')
    document_id = request.args.get('document_id')
    document_type = request.args.get('document_type')
    phone_number = request.args.get('phone_number')
    comment = request.args.get('comment')
    if fio is None:
        return jsonify({"status": "No FIO"})
    create_new_client(
        fio,
        document_id,
        document_type,
        phone_number,
        comment)
    return jsonify({"status": "Ok"})


@app.route('/addvisit', methods=['POST'])
@cross_origin()
def addvisit():
    client_id = request.args.get('client_id')
    room_id = request.args.get('room_id')
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    paid = request.args.get('paid')
    if client_id is None \
            or room_id is None \
            or start_date is None \
            or end_date is None:
        return jsonify({"status": "Not all parameters given"})
    add_new_visit(
        client_id,
        room_id,
        start_date,
        end_date,
        paid)
    return jsonify({"status": "Ok"})

@app.route('/addadmin', methods=['POST'])
@cross_origin()
def addadmin():
    name = request.args.get('name')
    add_new_admin(name)
    return jsonify({"status": "Ok"})

@app.route('/get_accomodation_info', methods=['GET'])
@cross_origin()
def get_accomodation_info():
    room_id = request.args.get('room_id')
    date = request.args.get('date')
    if room_id is None \
            or date is None:
        return jsonify({"result": "Not all parameters given"})

    return get_accomodation_report(
        room_id,
        date)


if __name__ == '__main__':
    app.run()
