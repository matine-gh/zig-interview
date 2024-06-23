
import {StoriesInterface} from "@/store/Feeds/interface";
import Story from "@/app/components/Story";

export default function StoryList({storyList}: StoriesInterface[]) {

    return (
        <div className={'flex justify-between p-5 gap-4 overflow-x-scroll'}>
            <Story id={'my story'} image={''} />
            <>
                {storyList?.map((story, index) => (
                    <Story key={index} id={story.id} image={story.image} />
                ))}
            </>
        </div>
    )
}