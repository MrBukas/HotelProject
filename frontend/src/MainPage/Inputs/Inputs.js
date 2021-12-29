import React, {useState} from "react";
import {InputBox} from "./InputBox/InputBox";
import {ButtonDiv} from "./InputBox/ButtonDiv";

export const Inputs = (props) => {
    const [form1, setForm1] = useState({
        new_username: "",
        re_new_username: "",
        current_password: "",
    });
    const onChange = e => setForm1({...form1, [e.target.name]: e.target.value});
    const inputData = [
        {onChange: onChange,name: "new_username" ,value: form1.new_username, placeholder: "Login", header: " Email address"},
        {onChange: onChange,name: "re_new_username" ,value: form1.re_new_username, placeholder: "password", header: "Password"},
    ];
    console.log("form1: ",form1);

    return (
        <div className={"backgroundInputs"}>
            <div className={"containerInputs"}>
                <div className={"headerInputs"}>
                    Sing in
                </div>
                {inputData.map(input => <InputBox onChange={input.onChange} name={input.name} value={input.value} placeholder={input.placeholder} header={input.header}/>)}

                <div className={"buttonSignInInputs"}>
                    <ButtonDiv text={"Sign in"}/>
                </div>
            </div>
        </div>
    );
};
