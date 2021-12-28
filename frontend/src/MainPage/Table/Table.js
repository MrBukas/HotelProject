import React, {useEffect, useState} from "react";
import {LeftInfo} from "./LeftInfo/LeftInfo";
import {RightInfo} from "./RightInfo/RightInfo";

function getDataOfTable(url, setData) {
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors"
    }).then(response => response.json().then(res => setData(res)));
}

export const Table = (props) => {
    const [dateForTable, setDateForTable] = useState({});
    const [rooms, setRooms] = useState({});
    useEffect(() => {
        const url = `http://127.0.0.1:5000/getstatus?year=${new Date().getFullYear()}&month=${new Date().getMonth()}`
        getDataOfTable(url, setDateForTable);
    }, []);

    useEffect(() => {
        const url = `http://127.0.0.1:5000/getrooms`;
        getDataOfTable(url, setRooms);
    }, []);
    console.log(rooms);
    let numbersInfo = ["num1", "num2", "num3"];
    return (
        <div className={"tableContainer"}>
            <div className={"leftInfo"}>
                <LeftInfo numbersInfo={numbersInfo}/>
            </div>
            <div className={"rightInfo"}>
                <RightInfo numbersInfo={numbersInfo}/>
            </div>
        </div>
    );
};
