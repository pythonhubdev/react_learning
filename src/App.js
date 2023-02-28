import './App.css';
import StateComponent from "./Components/Component";

function App() {
    return (
        <div>
            <StateComponent>
                <ChildrenComponent/>
            </StateComponent>
        </div>
    )
        ;
}

const ChildrenComponent = () => {
    return <p>This is a children component</p>;
}

export default App;
