import {StoryInterface} from "@/store/Feeds/interface";
import Avatar from '@mui/material/Avatar';
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Badge from "@mui/material/Badge";
import * as React from "react";

export default function Story({image, id, addStory}: StoryInterface) {

    return (
        <div className={'flex-1'}>
            <>
                {id === 'my story' ?
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <AddCircleRoundedIcon color={'primary'} />
                        }
                        onClick={addStory}
                        className={'p-1'}>
                        <Avatar  color="primary" alt={id} src={image} className={'m-auto'} sx={{ width: 56, height: 56 }}/>
                    </Badge>
                    :<div className={'bg-gradient-to-r from-cyan-200 to-blue-500 p-1 rounded-full'}>
                        <Avatar alt={id} src={image} className={'m-auto'} sx={{ width: 56, height: 56 }}/>
                    </div>
                }
            </>
            <p className={'text-center text-xs my-1'}>{id}</p>
        </div>
    )
}