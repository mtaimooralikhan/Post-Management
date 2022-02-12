import React from 'react';
import "./Infomessage.css"

const Infomessage = (props) => {
    return (
        <div className={props.class}>
            {props.message}
        </div>
    );
}

export default Infomessage;