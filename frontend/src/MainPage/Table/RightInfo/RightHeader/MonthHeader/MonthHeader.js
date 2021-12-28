import React from "react";
import {DayHeader} from "../DayHeader/DayHeader";

export function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export const MonthHeader = (props) => {
    return(
        <div className={"month"}>
            {props.month}
            <DayHeader amountOfDays={daysInMonth(props.monthNum, 2021)}/>
        </div>
    );
};
