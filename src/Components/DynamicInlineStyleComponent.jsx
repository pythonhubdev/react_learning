import "./DynamicInlineStyleComponent.css";
import {useState} from "react";

const content = [
    {
        title: "Title 1",
        description: "Description 1",
        image: "https://picsum.photos/200/300"
    },
    {
        title: "Title 2",
        description: "Description 2",
        image: "https://picsum.photos/200/300"
    },
    {
        title: "Title 3",
        description: "Description 3",
        image: "https://picsum.photos/200/300"
    }
];

const DynamicInlineStylingComponent = () => {


    // We are using the useState hook to create a stateful variable called statefulContent that contains a list.
    const [statefulContent, setStatefulContent] = useState(content);


    // We are creating a function that will be called when the button is clicked.
    const repeatNewItem = () => {
        setStatefulContent(
            // We are using the spread operator to copy the content array and add the last item in the array to the end of the array.
            (prevState) => [...prevState, prevState[prevState.length - 1]]
        )
    }

    return (
        <div className="wrapper">
            <div className="list-container">

                {
                    statefulContent.map((item, index) => (
                        <div className="list-item" key={index}>
                            <img src={item.image} alt={"A sky scenery"}/>
                            <div className={"item-content"}>
                                {/*
                                    Adding dynamic styling with the help of the ternary operator.
                                */}
                                <div>
                                    <h2 style={{color: item.title !== "Title 3" ? "white" : "red"}}>{item.title}</h2>

                                    {/*
                                        Setting the class name dynamically with the help of the ternary operator
                                        / conditional rendering.
                                    */}
                                    <p className=
                                           {`${item.description === "Description 1" ? "valid-desc" : "invalid-desc"}`}
                                    >{item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <button
                    onClick={repeatNewItem}
                >Repeat new item
                </button>
            </div>
        </div>
    );
}


export default DynamicInlineStylingComponent;


