import "./Component.css"; // Importing CSS files


const CustomComponent = (props) => {

    const handleClick = () => {
        // Passing a function to the onClick attribute
        console.log("Simple click");
        alert("Simple click");
    }

    return (
        <div>
            <div>
                {props.children}
                {/*
                    With the help of JSX syntax,
                    you will be able to add function to a native HTML element via the custom attributes provided via React
                */}
                <button
                    onClick={
                        () => {
                            // Passing an anonymous function to the onClick attribute
                            console.log("Simple click");
                            alert("Simple click");
                        }
                    }>Anonymous click
                </button>
                {/*
                    When using JSX code, it's important to keep in mind that the code will be parsed before the
                    browser renders the page. Therefore, it's recommended that you pass the function name as a
                    reference instead of calling the function directly. This can help improve the efficiency and
                    performance of your code. By passing the function name, you ensure that the function is only
                    called when it's actually needed, rather than being called unnecessarily during the parsing stage.
                 */}
                <button

                    onClick={handleClick}>Function Block Click
                </button>
            </div>
        </div>
    );
}


export default CustomComponent;


