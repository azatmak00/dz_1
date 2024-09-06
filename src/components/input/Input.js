import React from 'react';
import classes from "./input.module.css";

const Input = ({placeholder, color}) => {
    return (
        <>
            <div>
                <input type="text" placeholder={`${placeholder}`} className={`${classes[color]}`}/>
            </div>
        </>
    );
};

export default Input;