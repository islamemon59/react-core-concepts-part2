import { useEffect, useState } from "react"

export default function Players(){

    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return(
        <div className="postsCard">
            <h1>All players here</h1>
            <h2>Players: {players.length}</h2>
            <div>
            {
                players.map(player => <p className="postsCard">Name: {player.name}</p>)
            }
            </div>
        </div>
    )
}