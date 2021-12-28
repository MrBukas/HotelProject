import React from 'react';
import {Input} from "./Input";

export const InputBox = (props)=>{
    return(
        <div className={"inputBox"}>
            <div className={"description"}>
                {props.header}
            </div>
            <Input placeholder={props.placeholder} classes={"input"}/>
        </div>
    );
}