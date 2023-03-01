import "./Component.css";
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

const ListComponent = () => {


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

                {/*
                    In the map function, we are looping through the content array and for each item in the array,
                    we are returning a div with the class name list-item.
                    We are also passing a key to the div, which is the index of the item in the array.
                    (We can see about keys in React later, but for reference you can check out here: https://reactjs.org/docs/lists-and-keys.html)
                    With the help of the map function, we are able to render the content array in the browser without having to write the code for each item in the array.
                */}

                {
                    statefulContent.map((item, index) => (
                        <div className="list-item" key={index}>
                            <img src={item.image} alt={"A sky scenery"}/>
                            <div className={"item-content"}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
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


export default ListComponent;


