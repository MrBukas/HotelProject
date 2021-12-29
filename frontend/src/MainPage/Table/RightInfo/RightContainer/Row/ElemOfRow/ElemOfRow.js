import React from "react";

export const ElemOfRow = (props) => {
    let day = props.day;
    return(
        <div className={day !== 1 ? "elemOfRow": "elemOfRowActive"}>
            {props.day !==1 ? "0   ":"Н"}
        </div>
    );
};
