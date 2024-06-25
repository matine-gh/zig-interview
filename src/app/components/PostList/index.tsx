import {PostInterface} from "@/store/Feeds/interface";

import Post from "../Post/index"

export default function PostList({...postList}: PostInterface[]) {
    return (
        <div>{
            postList.map(post => (
                <div key={post.id}>
                    <Post {...post}/>
                </div>
            ))
        }</div>
    )
}