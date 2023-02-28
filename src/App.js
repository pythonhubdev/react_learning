import './App.css';
import CComponent from "./Components/Component";

function App() {
    return (
        <div>
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
