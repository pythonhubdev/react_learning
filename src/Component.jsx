const CustomComponent = () => {
    return (
        <div>
            <h1>My first react component</h1>
            {/* We can add more and more components here to make a complex component. */}
            <p>A short description for my custom component</p>
        </div>
    );
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