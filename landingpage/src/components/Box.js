import React from "react";
import "./box.css"

export default function Box(props) {
    return (
        <div className="icon">
            <img src={props.icon} alt="logo-declarative"/> 
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}