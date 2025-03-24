import { useState } from "react"

export default function Bowlers(){

    const [bowls, setBowls] = useState(0);
    const [overs, setOvers] = useState(0);

    const handleBowls = () => {
        const newBowls = bowls + 1;
        setBowls(newBowls)
        // const oneOvers = overs + 0;
        // setBowls(oneOvers)
        if(newBowls % 6 === 0){
            const newOvers = overs + 1;
            setOvers(newOvers)
        }
    }




    const addStyle = {
        backgroundColor: "#5cf7be",
        padding: "20px",
        borderRadius: "20px",
        border: "4px solid red",
        margin: "20px"
    }

    return(
        <div style={addStyle}>
            <h1>All Bowlers</h1>
            {/* {
                bowls > 6 && 
            } */}
            <h4>Overs: {overs}</h4>
            <h2>Bools: {bowls}</h2>
            <button onClick={handleBowls}>Bowls</button>
        </div>
    )
}