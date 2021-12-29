import React from "react";
import {NavLink} from "react-router-dom";

export const NavElem = (props) => {
    return (
        <div className={"navElemBlock"}>
            <NavLink to={props.to} className={"navElem"}> {props.text} </NavLink>
        </div>
    );
};

