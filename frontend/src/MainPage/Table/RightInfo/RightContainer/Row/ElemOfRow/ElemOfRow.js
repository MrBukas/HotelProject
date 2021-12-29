import React from "react";

export const ElemOfRow = (props) => {
    let day = props.day;
    const onClick = () => {
        const url = "http://127.0.0.1:5000/get_accomodation_info?room_id=101&date=7.10.2021";
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => response.json().then(res => {
            alert(JSON.stringify(res));
        }));
    }
    return (
        <div onClick={onClick} className={day !== 1 ? "elemOfRow" : "elemOfRowActive"}>
            {props.day !== 1 ? "0" : "Н"}
        </div>
    );
};
