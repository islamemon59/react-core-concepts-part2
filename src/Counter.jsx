import { useState } from "react"


export default function Counter(){

    const [count, setCount] = useState(0)

    const countHandler = () => {
        const newCount = count + 1
        setCount(newCount)
    }

    const countryStyle = {
        border: "1px solid orange"
    }

    return(
        <div style={countryStyle}>
            <h3>Count: {count}</h3>
            <button onClick={countHandler}>Add</button>
        </div>
    )
}