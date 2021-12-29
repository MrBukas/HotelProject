import React, {useState} from "react";
import {InputBox} from "./InputBox/InputBox";
import {ButtonDiv} from "./InputBox/ButtonDiv";

export const Inputs = (props) => {
    const [form1, setForm1] = useState({
        fio: "",
        document_id: "",
        document_type: "",
        phone_number: "",
        comment: "",
    });
    const onChange = e => setForm1({...form1, [e.target.name]: e.target.value});
    const inputData = [
        {onChange: onChange,name: "fio" ,value: form1.fio, placeholder: "Login", header: "ФИО"},
        {onChange: onChange,name: "document_id" ,value: form1.document_id, placeholder: "password", header: "id Документа"},
        {onChange: onChange,name: "document_type" ,value: form1.document_type, placeholder: "document type", header: "Тип документа"},
        {onChange: onChange,name: "phone_number" ,value: form1.phone_number, placeholder: "phone number", header: "Номер телефона"},
        {onChange: onChange,name: "comment" ,value: form1.comment, placeholder: "comment", header: "Коммент"},
    ];
    const onClick = () =>{
        const url = `http://127.0.0.1:5000/addclient`;
        fetch(url, {
            method: 'POST',
            headers:{
                "Content-Type":" application/json",
            },
            body: JSON.stringify(form1)
        }).then();
    }
    return (
        <div className={"backgroundInputs"}>
            <div className={"containerInputs"}>
                <div className={"headerInputs"}>
                    Добавить клиента
                </div>
                {inputData.map((input,i) => <InputBox key={i} onChange={input.onChange} name={input.name} value={input.value} placeholder={input.placeholder} header={input.header}/>)}

                <div className={"buttonSignInInputs"}>
                    <ButtonDiv onClick={onClick} text={"Подтвердить"}/>
                </div>
            </div>
        </div>
    );
};
