import React from "react";
import {LeftHeader} from "./LeftHeader/LeftHeader";
import {LeftContainer} from "./LeftContainer/LeftContainer";

export const LeftInfo = (props) => {
    return (
        <div>
            <div className={"leftHeader"}>
                <LeftHeader text={"Name Columns"}/>
            </div>
            <div className={"leftContainer"}>
                <LeftContainer/>
            </div>
        </div>
    );
};
