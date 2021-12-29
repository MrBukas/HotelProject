import React from "react";
import {setDay} from "../../RightHeader/DayHeader/DayHeader";
import {ElemOfRow} from "./ElemOfRow/ElemOfRow";

export const Row = (props) => {
    return(
        <div className={"row"}>
            {props.data.map((day, i)=><ElemOfRow key={i} day={day}/>)}
        </div>
    );
};
