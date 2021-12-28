import React from "react";

import {RightHeader} from "./RightHeader/RightHeader";
import {RightContainer} from "./RightContainer/RightContainer";

export const RightInfo = (props) => {
    return(
           <div>
            <div className={"rightHeader"}>
                <RightHeader text={"Name Columns"}/>
            </div>
            <div className={"rightContainer"}>
                <RightContainer/>
            </div>
        </div>
    );
};
