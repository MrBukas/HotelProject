import React from "react";
import {NavElem} from "./NavElem";
import {FORM2_ROUTE, FORM_ROUTE, TABLE_ROUTE} from "../../Const";

export const Menu = () => {
    const buttons = [
        {to: TABLE_ROUTE, text: "Table"},
        {to: FORM_ROUTE, text: "Добавить клиента"},
        {to: FORM2_ROUTE, text: "Добавить заезд"},
    ];
    return(
        <div className={"buttons"}>
            {buttons.map((button, i)=><NavElem key={i} to={button.to} text={button.text}/>)}
        </div>
    );
};
