import React from 'react';
import {Input} from "./Input";

export const InputBox = (props)=>{
    return(
        <div className={"inputBox"}>
            <div className={"description"}>
                {props.header}
            </div>
            <Input onChange={props.onChange} name={props.name} value={props.value} placeholder={props.placeholder} classes={"input"}/>
        </div>
    );
}