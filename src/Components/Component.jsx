import "./Component.css";
import {useState} from "react";

const FormComponent = () => {


    // Using useState hook to set the state of the form values
    // Using multiple useState hooks to set the state of the input fields

    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    });


    // Using functional state update to update the state of the input fields based on previous state


    const handleFormInputs = (event) => {
        setFormValues((previousFormState) => {
            return {...previousFormState, [event.target.name]: event.target.value};
        });
    }


    const handleSubmit = () => {
        alert("Form submitted with username: " + formValues.username);
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
                    value={formValues.username}
                    onChange={handleFormInputs}
                />
            </div>
            <div className={"row"}>
                <label htmlFor="password" className={"form-label"}>Password</label>
                <input
                    className="form-input"
                    id="password"
                    type="text"
                    name="password"
                    value={formValues.password}
                    onChange={handleFormInputs}
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


