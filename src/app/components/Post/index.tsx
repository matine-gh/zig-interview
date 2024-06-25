import Avatar from "@mui/material/Avatar";
import {PostInterface} from "@/store/Feeds/interface";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {useState} from "react";
import Image from "next/image";

export default function Post({...post}: PostInterface) {

    const [liked, setLiked] = useState<boolean>(false)
    return (
        <div className={'bg-white rounded-lg my-8 p-4 flex'}>
            <Avatar alt={post.user.username} src={post.user.avatar} className={''} sx={{ width: 36, height: 36 }}/>
            <div className={'space-y-4'}>
                <div className={'flex justify-between gap-2'}>
                    <div className={'pl-2'}>
                        <b>{post.user.name}</b>
                        <p className={'text-secondary text-xs'}>{post.user.username}</p>
                    </div>
                    <div className={'flex-1 text-right'}>
                        <CheckBoxOutlineBlankOutlinedIcon sx={{ color: '#ADADAD' }}/>
                    </div>
                </div>
                <p className={'text-sm'}>{post.desc}</p>
                <Image alt={'chart'} src={post.image} className={'w-full'} width={'200'} height={'200'}/>
                <div className={'flex justify-between gap-5 text-xs'}>
                    <div onClick={()=>setLiked(!liked)}>
                        <ShowChartOutlinedIcon sx={{ color: liked? '#00C400':'#ADADAD', padding: 0 }} fontSize="small" />
                        <span className={`${liked? 'text-success': 'text-secondary'} text-xs`}>{post.impression.like + liked}</span>
                    </div>
                    <div>
                        <MessageOutlinedIcon sx={{ color: '#ADADAD' }} fontSize="small"/>
                        <span className='text-secondary'>{post.impression.comment}</span>
                    </div>
                    <div>
                        <SendOutlinedIcon sx={{ color: '#ADADAD' }} fontSize="small"/>
                        <span className='text-secondary'>{post.impression.share}</span>
                    </div>
                    <div>
                        <LoopOutlinedIcon sx={{ color: '#ADADAD' }} fontSize="small"/>
                        <span className='text-secondary'>{post.impression.repost}</span>
                    </div>
                    <div className={'flex-1 text-right'}>
                        <BookmarkBorderOutlinedIcon sx={{ color: '#ADADAD' }} fontSize="small"/>
                    </div>
                </div>
            </div>
        </div>
    )
}