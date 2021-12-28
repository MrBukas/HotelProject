import React from "react";
import {LeftInfo} from "./LeftInfo/LeftInfo";
import {RightInfo} from "./RightInfo/RightInfo";

export const Table = (props) => {
    let numbersInfo = ["num1", "num2", "num3"];
    return (
        <div className={"tableContainer"}>
            <div className={"leftInfo"}>
                <LeftInfo numbersInfo={numbersInfo}/>
            </div>
            <div className={"rightInfo"}>
                <RightInfo numbersInfo={numbersInfo}/>
            </div>
        </div>
    );
};
