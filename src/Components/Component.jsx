import "./Component.css"; // Importing CSS files


const CustomComponent = (props) => {
    const description = "This is a short description";
    return (
        <div>
            {/* Showing dynamic data via props */}
            <h1 style={{color: "red"}}>{props.title}</h1>
            {/* Showing dynamic data via variable */}
            <p className="short-description">{description}</p>
        </div>
    );
}


export default CustomComponent;


