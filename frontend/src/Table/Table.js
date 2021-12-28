import classes from "./Table.module.css";

export const Table = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
        </div>
    )
}


export const Header = () => {
    let month = setArr(12);
    return (
        <div className={classes.header}>
            <HeaderMonth month={month}/>
        </div>
    );
}

const HeaderMonth = (props) => {
    return (
        <div className={classes.headerMonth}>
            {props.month.map((mo, i) =>
                <div className={classes.month} key={i}>{mo}
                    <HeaderDay key={i} day={daysInMonth(mo, 2021)}/>
                </div>
            )}
        </div>
    );
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function setArr(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i] = i;
    }
    return arr;
}

const HeaderDay = (props) => {
    let elemDate = setArr(props.day);

    return (
        <div className={classes.headerDay}>
            {elemDate.map((elem, i) =>
                <div className={classes.container}>
                    <div className={classes.day} key={i}>{elem}</div>
                    <Elem rows={[1, 2]}/>
                </div>)}
        </div>
    );
}


export const Elem = (props) => {
    return (
        <div className={classes.elem}>
            {props.rows.map(row =>
                <Row row={row}/>
            )}
        </div>
    );
}
export const Row = () => {
    return (
        <div className={classes.row}>
            1
        </div>
    );
}
