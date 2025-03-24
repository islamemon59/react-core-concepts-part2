import { use } from "react"
import Friend from "./Friend";

export default function Friends({fetchFriends}){

    const friends = use(fetchFriends)
    return(
        <div className="friendsCard">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id}  friend={friend}></Friend>)
            }
        </div>
    )
}