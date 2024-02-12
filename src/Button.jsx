import React, {useState} from 'react';
import './Button.css';

// (() => {alert("BUTTONS Loaded...")})()

const Button = (props) => {
    let [result, SetResultState] = useState(11);

    function clicker() {
        console.log("click!");
        SetResultState(100);
    }

    return (
        <div>
            <button className={"button_inside " + props.className}
                    style={{border: props.border, fontSize: props.fontSize}}
                    onClick={props.twister ? props.twister : clicker}>
                {props.name}
            </button>
            <div className="labelInfo">
                Result = {result}
            </div>
        </div>
    );
};

export default Button;