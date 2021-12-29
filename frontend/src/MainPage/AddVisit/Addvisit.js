import React, {useState} from "react";
import {InputBox} from "../Inputs/InputBox/InputBox";
import {ButtonDiv} from "../Inputs/InputBox/ButtonDiv";

export const AddVisit = (props) => {
    const [form2, setForm2] = useState({
        client_id: "",
        room_id: "",
        start_date: "",
        end_date: "",
        paid: "",
    });
    const onChange = e => setForm2({...form2, [e.target.name]: e.target.value});
    const inputData = [
        {onChange: onChange,name: "client_id" ,value: form2.client_id, placeholder: "client id", header: "id клиента"},
        {onChange: onChange,name: "room_id" ,value: form2.room_id, placeholder: "room id", header: "id комнаты"},
        {onChange: onChange,name: "start_date" ,value: form2.document_type, placeholder: "start date", header: "Начальная время"},
        {onChange: onChange,name: "end_date" ,value: form2.phone_number, placeholder: "end date", header: "Конечное время"},
        {onChange: onChange,name: "paid" ,value: form2.comment, placeholder: "paid", header: "Заплачено"},
    ];
    const onClick = () =>{
        const url = `http://127.0.0.1:5000/addvisit`;
        fetch(url, {
            method: 'POST',
            headers:{
                "Content-Type":" application/json",
            },
            body: JSON.stringify(form2)
        }).then();
    }
    return (
        <div className={"backgroundInputs"}>
            <div className={"containerInputs"}>
                <div className={"headerInputs"}>
                    Добавить заезд
                </div>
                {inputData.map((input,i) => <InputBox key={i} onChange={input.onChange} name={input.name} value={input.value} placeholder={input.placeholder} header={input.header}/>)}

                <div className={"buttonSignInInputs"}>
                    <ButtonDiv onClick={onClick} text={"Подтвердить"}/>
                </div>
            </div>
        </div>
    );
};
