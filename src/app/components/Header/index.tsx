import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {HeaderInterface} from "@/app/components/Header/header.interface";
export default function Header({setIsSidebarOpen}: HeaderInterface) {

    return (
        <MenuOutlinedIcon onClick={()=> setIsSidebarOpen(true)}/>
    )
}