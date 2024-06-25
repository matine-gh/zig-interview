'use client'
import * as React from 'react';
import "../../globals.css";
import StoryList from "@/app/components/StoryList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFeedsLoading} from "@/store/Feeds/action";
import {PostInterface, StoryInterface} from "@/store/Feeds/interface";
import TabBar from "@/app/components/TabBar";
import PostList from "@/app/components/PostList";

export default function Main() {

    const [storyList, setStoryList] = useState<StoryInterface[]>();
    const [postList, setPostList] = useState<PostInterface[]>();

    const dispatch = useDispatch();
    const feedsStates = useSelector((state: any)=>state.feeds.response);

    useEffect(() => {
        dispatch(getFeedsLoading());
    }, []);

    useEffect(() => {
        if (feedsStates.stories){
            setStoryList(feedsStates.stories)
        }
    }, [feedsStates.stories]);

    useEffect(() => {
        if (feedsStates.posts){
            setPostList(feedsStates.posts)
        }
    }, [feedsStates.posts]);

    return (
        <div className={'flex-1'}>
            {storyList && <StoryList {...storyList}/>}
            <TabBar>
                {postList && <PostList {...postList}/>}
            </TabBar>
        </div>
    )
}