import './App.css';
import CComponent from "./Components/Component";

function App() {
    return (
        <div>
            {/*Wrapping the children component with the CComponent.
            Since we are using the children prop, we can pass* any component as a child to the CComponent */}
            <CComponent>
                <ChildrenComponent/>
            </CComponent>
        </div>
    )
        ;
}

const ChildrenComponent = () => {
    return <p>This is a children component</p>;
}

export default App;
