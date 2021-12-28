import React from "react";
import {MonthHeader} from "./MonthHeader/MonthHeader";

function getIndex(maxNum, index) {
    if (index >= maxNum ) return 0
    if (index < 0) return maxNum - 1
    return index
}

function setMonthsFromCurrent(monthLength) {
    let months = [];
    let i = 0;
    let currentMonth = new Date().getMonth();
    while (i<monthLength){
        months[i] = getIndex(12, currentMonth);
        currentMonth = getIndex(12, currentMonth) + 1;
        i++;
    }
    return months;
}

export const RightHeader = (props) => {
   let months = setMonthsFromCurrent(2);
    return(
        <>
           {months.map((month, i)=><MonthHeader key={i} month={new Date(new Date().setMonth(month)).toLocaleString('ru', { month: 'long' })}/>)}
        </>
    );
};
