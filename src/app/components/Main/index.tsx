'use client'
import * as React from 'react';
import "../../globals.css";
import StoryList from "@/app/components/StoryList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFeedsLoading} from "@/store/Feeds/action";
import {StoriesInterface} from "@/store/Feeds/interface";
import TabBar from "@/app/components/TabBar";

export default function Main() {

    const [storyList, setStoryList] = useState<StoriesInterface>()

    const dispatch = useDispatch();
    const feedsStates = useSelector((state: any)=>state.feeds.response);

    useEffect(() => {
        dispatch(getFeedsLoading());
    }, []);

    useEffect(() => {
        console.log('feedsStates', feedsStates)
        setStoryList(feedsStates.stories)
    }, [feedsStates]);

    return (
        <div className={'flex-1'}>
            <StoryList storyList={storyList}/>
            <TabBar />
        </div>
    )
}