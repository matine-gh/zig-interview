import {StoriesInterface} from "@/store/Feeds/interface";
import Avatar from '@mui/material/Avatar';
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Badge from "@mui/material/Badge";

export default function Story({image, id}: StoriesInterface) {
    return (
        <div className={'flex-1'}>
            <>
                {id === 'my story' ?
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <AddCircleRoundedIcon color={'primary'} />
                        } className={'p-1'}>
                        <Avatar  color="primary" variant="outlined" alt={id} src={image} className={'m-auto'} sx={{ width: 56, height: 56 }}/>
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