import React from "react";

export const LeftContainer = (props) => {
    return(
        <div>
            {props.numbersInfo.map((number, i)=>
                <div key={i} className="numbersInfo">
                    {number}
                </div>)
            }
        </div>
    );
};

