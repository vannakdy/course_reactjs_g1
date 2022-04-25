import React from "react";
import "./Input.css";
const Input = (props) => {
    // const {
    //     placeholder,
    //     value,
    // } = props;
    return (
        <input 
            type={props.type}
            className="input"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}
export default Input;