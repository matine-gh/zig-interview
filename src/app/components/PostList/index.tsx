import {PostInterface} from "@/store/Feeds/interface";

import Post from "../Post/index"

export default function PostList({...postList}: PostInterface[]) {
    return (
        <div>{
            postList && Object.keys(postList).map(id => (
                <div key={id}>
                    <Post {...postList[id]}/>
                </div>
            ))
        }</div>
    )
}