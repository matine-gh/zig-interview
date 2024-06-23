export interface FeedsInterface {
    stories: StoriesInterface;
    posts: PostsInterface;
}

export interface StoriesInterface {
    id: string;
    image: string
}
export interface PostsInterface {
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