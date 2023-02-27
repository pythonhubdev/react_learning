import {Component} from "react";
import "./Component.css"; // Importing CSS files

// To add basic styling to a component, we can use inline styles. Inline styles are not recommended for complex styling.
// Example: <div style={{color: 'red', fontSize: '20px'}}>Hello World</div>

// To add complex styling to a component, we can use CSS files. We can import the CSS file in the component file.
// Example: import "./Component.css";

class CustomComponent extends Component {
    render() {
        return (
            <div>
                {/* Applying inline CSS for the h1 component */}
                <h1 style={{color: "red"}}>My first react component</h1>
                {/* We can add more and more components here to make a complex component. */}
                {/* Applying CSS class for the p component */}
                <p className="short-description">A short description for my custom component</p>
            </div>
        );
    }
}

const OtherComponent = () => {
    return <h2>A Secondary title</h2>;
}


// Using export makes it easier to import the component in other files.

/*

When exporting a component from a JavaScript module, you can use the default export syntax to make it easier to
import the component in other files. When exporting a component as the default export, you can name the component
anything you want, which can be particularly useful when working with third-party libraries or when you want to
give a more descriptive name to the component.
Example: import CustomComponent from './Component.jsx';

 */

export default CustomComponent;

/*

To export multiple components from a single file, you can use the named exports syntax. You can import just the
components you need using the curly braces syntax and the exact name of each component.
Example: import {OtherComponent} from './Component.jsx';

 */

export {OtherComponent};