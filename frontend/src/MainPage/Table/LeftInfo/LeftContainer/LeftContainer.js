import React from "react";

export const LeftContainer = (props) => {
    return(
        <div>
            {props.rooms.map((room, i)=>
                <div key={i} className="numbersInfo">
                    {room}
                </div>)
            }
        </div>
    );
};

