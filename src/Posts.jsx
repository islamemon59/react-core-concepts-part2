import { use } from "react";
import Post from "./Post";

export default function Posts({callPosts}){
    const posts = use(callPosts)
    return(
    <div className="postsCard">
        <h1>All post here</h1>
        {
            posts.map(post => <Post key={post.id} post={post}></Post>)
        }
    </div>
    )
}