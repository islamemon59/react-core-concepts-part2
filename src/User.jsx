export default function User({user}){
    const {name, username, email, phone} = user
    return(
        <div className="usersCard">
            <h2>Name: {name}</h2>
            <h2>UserName: {username}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
        </div>
    )
}