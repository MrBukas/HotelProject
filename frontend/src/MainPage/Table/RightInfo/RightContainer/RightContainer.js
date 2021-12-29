import React from "react";
import {daysInMonth} from "../RightHeader/MonthHeader/MonthHeader";
import {Row} from "./Row/Row";

export const RightContainer = (props) => {

    return(
        <div>
            {props.numbersInfo.map((number,i)=><Row key={i} amountOfDays={daysInMonth(new Date().getMonth()+1, 2021)}/>)}
        </div>
    );
};

