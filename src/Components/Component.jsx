import "./Component.css";
import {useState} from "react"; // Importing CSS files

const StateComponent = (props) => {

    /*
        A State is a piece of data that is stored in the component and can be changed.
        A component's memory is called state.
        Hooks are used to manage state in functional components.
        Hooks must be called at the top level of the function component not inside if/else/for/while or any other block.
    */

    /*
        Hooks are functions that let you “hook into” React state and lifecycle features from function components.
        Hooks start with the word 'use'.
        There are different types of hooks.
        For example, useState, useEffect, useContext, useReducer, etc.
        Can write custom hooks to reuse stateful logic, and the name of the custom hook must start with use.
     */

    // React registers separate states for each component. And each state is independent of other states.

    /*
        useState
            1. useState can be initialized with a default value.
            2. useState return an array with two elements.
            3. The first element is the state variable.
            4. The second element is a function that can be used to update the state variable.
     */

    const [title, setTitle] = useState("Before state change");

    const handleClick = () => {
        setTitle("After state change");
    }

    return (
        <div>
            <div>
                <p>{title}</p>
                {props.children}
                <button
                    onClick={handleClick}>Function Block Click
                </button>
            </div>
        </div>
    );
}


export default StateComponent;


