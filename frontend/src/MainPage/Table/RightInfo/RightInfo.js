import React from "react";
import {RightHeader} from "./RightHeader/RightHeader";
import {RightContainer} from "./RightContainer/RightContainer";

export const RightInfo = (props) => {
    return(
           <div>
            <div className="rightHeader">
                <RightHeader/>
            </div>
            <div className={"rightContainer"}>
                <RightContainer  numbersInfo={props.numbersInfo}/>
            </div>
        </div>
    );
};
