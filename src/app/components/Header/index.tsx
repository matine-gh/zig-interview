import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {HeaderInterface} from "@/app/components/Header/header.interface";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
export default function Header({setIsSidebarOpen}: HeaderInterface) {

    return (
        <div className={'flex justify-between gap-3 px-5 py-4'}>
            <MenuOutlinedIcon onClick={()=> setIsSidebarOpen(true)}/>
            <h1 className={'flex-1 text-primary-dark text-lg font-black'}>CryptoGap</h1>
            <a href={'/notification'}><NotificationsNoneOutlinedIcon /></a>
            <a href={'/direct'}><InboxOutlinedIcon /></a>
        </div>
    )
}