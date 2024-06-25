export interface FeedsInterface {
    stories: StoryInterface[];
    posts: PostInterface[];
}
export interface StoryInterface {
    id: string;
    image: string;
    addStory: () => void
}
export interface PostInterface {
    id: number;
    image: string;
    desc: string;
    user: UserInterface;
    impression: ImpressionInterface;
    coins: string[]
}

export interface UserInterface {
    name: string
    avatar: string
    username: string
}

export interface ImpressionInterface {
    like: number;
    comment: number;
    share: number;
    repost: number;
}