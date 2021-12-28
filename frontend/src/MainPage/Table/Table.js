import React from "react";
import {LeftInfo} from "./LeftInfo/LeftInfo";
import {RightInfo} from "./RightInfo/RightInfo";

export const Table = (props) => {
    return (
        <div className={"tableContainer"}>
            <div className={"leftInfo"}>
                <LeftInfo/>
            </div>
            <div className={"rightInfo"}>
                <RightInfo/>
            </div>
        </div>
    );
};
