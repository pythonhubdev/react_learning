import "./Component.css"; // Importing CSS files


const CustomComponent = (props) => {
    return (
        <div>
            <div>
                {/* Passing children via props: with the help of this,
                we can pass another HTML component as children */}
                {props.children}
            </div>
        </div>
    );
}


export default CustomComponent;


