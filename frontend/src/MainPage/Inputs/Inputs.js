import React from "react";
import {InputBox} from "./InputBox/InputBox";
import {ButtonDiv} from "./InputBox/ButtonDiv";

export const Inputs = (props) => {
    const inputData = [
        {placeholder: "Login", header: " Email address or username"},
        {placeholder: "password", header: "Password"},
    ];
    return (
        <div className={"backgroundInputs"}>
            <div className={"containerInputs"}>
                <div className={"headerInputs"}>
                        Sing in
                </div>
                {inputData.map(input => <InputBox placeholder={input.placeholder} header={input.header}/>)}

                <div className={"buttonSignInInputs"}>
                    <ButtonDiv text={"Sign in"}/>
                </div>
            </div>
        </div>
    );
};
