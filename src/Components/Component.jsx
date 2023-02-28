import "./Component.css";
import {useState} from "react";

const FormComponent = () => {


    // Using useState hook to set the state of the form values
    // Using multiple useState hooks to set the state of the input fields

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // Using single useState hook to set the state of the form values

    // const [formValues, setFormValues] = useState({
    //     username: "",
    //     password: ""
    // });


    // Getting form values using event.target.value

    const usernameHandler = (event) => {
        setUsername(event.target.value);

        // Using single useState hook to set the state of the form values
        // setFormValues(
        //     {
        //         ...formValues,
        //         username: event.target.value
        //     }
        // )
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);

        // Using single useState hook to set the state of the form values
        // setFormValues(
        //     {
        //         ...formValues,
        //         password: event.target.value
        //     }
        // )
    }

    const handleSubmit = () => {
        alert("Form submitted with username: " + username);
    }

    return (
        <div className="form">
            <div className={"row"}>
                <label htmlFor="username" className={"form-label"}>Name</label>
                <input
                    className="form-input"
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={usernameHandler}
                />
            </div>
            <div className={"row"}>
                <label htmlFor="password" className={"form-label"}>Password</label>
                <input
                    className="form-input"
                    id="password"
                    type="text"
                    name="password"
                    value={password}
                    onChange={passwordHandler}
                />
            </div>
            <div className={"row"}>
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}


export default FormComponent;


