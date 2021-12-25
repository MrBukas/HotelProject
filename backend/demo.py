from termcolor import colored

from backend.response_generators import get_monthly_rooms_status, get_accomodation_report


def get_month_status(year, month):
    rooms = get_monthly_rooms_status(year, month, demo=True)
    for room in rooms.keys():
        for i in range(31):
            if rooms[room][i] == 1:
                print('\x1b[6;30;41m' + str(i) + '.' + '\x1b[0m', end='')

            else:
                print('\x1b[6;30;42m' + str(i) + '.' + '\x1b[0m', end='')
        print()


get_month_status(2021, 12)
print(get_accomodation_report(
    101,
    "12.12.2021",
    demo=True))
