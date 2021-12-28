import React from "react";
import {setDay} from "../../RightHeader/DayHeader/DayHeader";
import {ElemOfRow} from "./ElemOfRow/ElemOfRow";

export const Row = (props) => {
     let days = setDay(props.amountOfDays);
    return(
        <div className={"row"}>
            {days.map((day, i)=><ElemOfRow key={i} day={day}/>)}
        </div>
    );
};
