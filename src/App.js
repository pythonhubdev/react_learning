import './App.css';
import CComponent from "./Components/Component";

function App() {
    return (
        <div>
            {/* Passing dynamic data via react props */}
            <CComponent title={"Passing title via props"}/>
        </div>
    )
        ;
}

export default App;
