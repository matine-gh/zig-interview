
import {StoryInterface} from "@/store/Feeds/interface";
import Story from "@/app/components/Story";
import GeneralModal from "@/app/components/common/GeneralModal";
import * as React from "react";

export default function StoryList({...storyList}: StoryInterface[]) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className={'flex justify-between p-5 gap-4 overflow-x-scroll'}>
                <Story id={'my story'} image={''} addStory={handleOpen}/>
                <>
                    {storyList.map((story, index) => (
                        <Story key={index} id={story.id} image={story.image}  addStory={()=>setOpen(false)}/>
                    ))}
                </>
            </div>
            <GeneralModal handleClose={handleClose} open={open}>Add Your Story Here!</GeneralModal>
        </>

    )
}