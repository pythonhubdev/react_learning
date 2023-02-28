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


