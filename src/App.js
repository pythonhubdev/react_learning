import './App.css';
import CComponent, {OtherComponent} from "./Components/Component";

function App() {
    return (

        <div>
            {/*
                Here I am importing CustomComponent as CComponent.
                But this will work because I have exported default in Component.jsx
            */}
            <CComponent/>
            {/*
                Here I am importing OtherComponent.
                But this will not work if I have used a custom name while importing because this is not exported as default
            */}
            <OtherComponent/>
        </div>
    )
        ;
}

export default App;
