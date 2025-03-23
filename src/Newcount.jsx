import { useState } from "react"

export default function New(){

    const [count, setCount] = useState(0)

    const addNew = () => {
        console.log("count added");
        const newCounter = count + 1;
        setCount(newCounter)
    }

    const newStyle = {
        border: "2px solid red",
        backgroundColor: "cyan",
        color: "black",
        padding: "20px",
        borderRadius: "20px",
        margin: "20px"
    }
    return(
        <div style={newStyle}>
            <h2>Counter: {count}</h2>
            <button onClick={addNew}>Count</button>
        </div>
    )
}