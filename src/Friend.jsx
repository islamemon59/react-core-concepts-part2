export default function Friend({friend}){
    const {name, username, email, phone} = friend;
    return(
        <div className="friendsCard">
            <h2>Name: {name}</h2>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
        </div>
    )
}