import React from "react";
import './Person.css';

const Person = (props) => {
    return <div className="person">
        <p onClick={props.click}>Hello I am {props.name} and {props.age} year old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
    </div>
}
export default Person;