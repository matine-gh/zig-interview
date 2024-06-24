import {PostsInterface} from "@/store/Feeds/interface";

import Post from "../Post/index"

export default function PostList({postList}: PostsInterface[]) {
    return (
        <div>{
            postList.map(post => (
                <div key={post.id}>
                    <Post post={post}/>
                </div>
            ))
        }</div>
    )
}