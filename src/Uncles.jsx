import { use } from "react"

export default function Uncles({callUncles}){

    const uncles = use(callUncles)
    return(
        <div className="unclesCard">
            <h3>Uncles: {uncles.length}</h3>
        </div>
    )
}