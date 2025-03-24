export default function Post({post}){
    console.log(post);
    const {title, body} = post
    return(
        <div className="postsCard">
            <h2>Title: {title}</h2>
            <h4>Body: {body}</h4>
        </div>
    )
}