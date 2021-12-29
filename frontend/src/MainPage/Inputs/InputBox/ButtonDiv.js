import React from "react";

export const ButtonDiv = (props) => {
    return(
        <div className={props.classes} onClick={props.onClick}>
            {props.text}
        </div>
    );
}