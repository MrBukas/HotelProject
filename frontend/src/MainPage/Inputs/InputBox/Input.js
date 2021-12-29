export const Input = (props) => {
    return (
        <div>
            <input onChange={props.onChange} name={props.name} value={props.value} type={"text"} placeholder={props.placeholder} className={props.classes}/>
        </div>
    );
}