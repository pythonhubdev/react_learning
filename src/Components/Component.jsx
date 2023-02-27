import "./Component.css"; // Importing CSS files


const CustomComponent = (props) => {
    const description = "This is a short description";
    // Adding normal JavaScript logic inside JSX
    const date = new Date();
    return (
        <div>
            {/* Showing dynamic data via props */}
            <h1 style={{color: "red"}}>{props.title}</h1>
            {/* Showing dynamic data via variable */}
            <p className="short-description">{description} on {date.toDateString()}</p>
        </div>
    );
}


export default CustomComponent;


