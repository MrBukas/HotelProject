export const Input = (props) => {
    return (
        <div>
            <input type={"text"} placeholder={props.placeholder} className={props.classes}/>
        </div>
    );
}