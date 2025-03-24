import { use } from "react"
import User from "./User";

export default function Users({fetchUsers}){

    const users = use(fetchUsers)
    return(
        <div className="usersCard">
            <p>Users: {users.length}</p>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}