import React from "react";
import {Row} from "./Row/Row";

export const RightContainer = (props) => {
    let table = props.table;
    console.log("table: ", props.table);
    //daysInMonth(new Date().getMonth()+1, 2021)
    return(
        <div>
            {Object.keys(table).map((room,i)=><Row key={i} amountOfDays={table[room].length} data={table[room]}/>)}
        </div>
    );
};

