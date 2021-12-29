import React from "react";
import {Table} from "./Table/Table";
import {TitleOfPage} from "./TitleOfPage/TitleOfPage";
import {Menu} from "./Menu/Menu";

export const MainPage = (props) => {
    return (
        <div className="mainPage">
            <div className="titleOfPage">
                <TitleOfPage text={"Name Table"}/>
            </div>
            <div className="tableMainPage">
                <Table/>
            </div>
        </div>
    );
};
