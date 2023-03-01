import "./Component.css";

const ListComponent = () => {

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
                    content.map((item, index) => (
                        <div className="list-item" key={index}>
                            <img src={item.image} alt={"A sky scenery"}/>
                            <div className={"item-content"}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default ListComponent;


