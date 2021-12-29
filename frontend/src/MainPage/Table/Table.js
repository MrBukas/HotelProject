import React, {useEffect, useState} from "react";
import {LeftInfo} from "./LeftInfo/LeftInfo";
import {RightInfo} from "./RightInfo/RightInfo";

function getDataOfTable(url, setData, setIsLoaded) {
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json().then(res => {setData(res);setIsLoaded(true)}));
}

export const Table = (props) => {
    const [dateForTable, setDateForTable] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const url = `http://127.0.0.1:5000/getstatus?year=${new Date().getFullYear()}&month=${new Date().getMonth()}`
        getDataOfTable(url, setDateForTable, setIsLoaded);
    }, []);

    return (
        <div className={"tableContainer"}>
            <div className={"leftInfo"}>
                {isLoaded && <LeftInfo rooms={Object.keys(dateForTable["rooms"])}/>}
            </div>
            <div className={"rightInfo"}>
                {isLoaded && <RightInfo table={dateForTable["rooms"]}/>}
            </div>
        </div>
    );
};
