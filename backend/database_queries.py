def get_taken_rooms_query(year, month):
    y = str(year)
    m = str(month)
    query = f"""
    select 
    room_id room,
    date_format(start_date, '%d.%m.%Y') start, 
    date_format(leave_date, '%d.%m.%Y') leaved from accomodations
where start_date > '{y}-{m}-1' and leave_date < '{y}-{m}-31'
order by room_id, start_date
    """
    return query

def get_all_rooms():
    return "select distinct room_name from rooms"