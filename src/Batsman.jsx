import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)

    const singleRun = () => {
        const newSingle = runs + 1;
        setRuns(newSingle)
    }
    const fourRun = () => {
        const newFour = runs + 4;
        setRuns(newFour)
    }
    const sixRun = () => {
        const newSix = runs + 6;
        const howSixes = sixes + 1
        setRuns(newSix)
        setSixes(howSixes)
    }

    const addStyle = {
        backgroundColor: "#5cf7be",
        padding: "20px",
        borderRadius: "20px",
        border: "4px solid red"
    }
    return(
        <div style={addStyle}>
            <h1>Bangladesh Teammate</h1>
            <h5>Total six: {sixes}</h5>
            {
                runs > 50 && <h2>Your score: 50+</h2>
            }
            <h1>Runs: {runs}</h1>
            <button onClick={singleRun}>Single</button>
            <button onClick={fourRun}>Four</button>
            <button onClick={sixRun}>Six</button>
        </div>
    )
}