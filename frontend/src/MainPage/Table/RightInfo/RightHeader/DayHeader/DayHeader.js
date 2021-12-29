import React from "react";

export function setDay(n) {
    let days = [];
    for (let i = 1; i <= n; i++) {
        days[i] = i;
    }
    return days;
}

export const DayHeader = (props) => {
    let days = setDay(props.amountOfDays);

    return(
        <div className={"days"}>
            {days.map((day, i)=><Day key={i} day={day}/>)}
        </div>
    );
};

const Day = (props) => {
    return (
        <div className={"day"}>
            {props.day}
        </div>
    );
}