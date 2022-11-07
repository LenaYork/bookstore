import "./Input.css";

export const Input = (props) => {

    const {onChange, value, type, id } = props;

    return (
        <input 
            type={type}
            className="input"
            id={id}
            value={value}
            onChange={onChange}
        >
        </input>
    )
}