'use client'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlined from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from "@mui/material";
import {FooterItemInterface} from "@/app/components/Footer/footer.interface";
import ScoreOutlinedIcon from '@mui/icons-material/ScoreOutlined';
import ScoreIcon from '@mui/icons-material/ScoreOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import {usePathname} from "next/navigation";
export default function Footer() {
    const pathname = usePathname();

    const items: FooterItemInterface[] = [
        {
            path: '/',
            defaultIcon: <HomeOutlinedIcon />,
            selectedIcon: <HomeIcon />
        },
        {
            path: '/explore',
            defaultIcon: <SearchOutlined/>,
            selectedIcon: <SearchIcon />
        },
        {
            path: '/score',
            defaultIcon: <ScoreOutlinedIcon />,
            selectedIcon: <ScoreIcon />
        },
        {
            path: '/profile',
            defaultIcon: <AccountCircleOutlinedIcon />,
            selectedIcon: <AccountCircleIcon />
        }
    ]

    return (
        <>
            <div className={'fixed bottom-20 right-2'}>
                <AddCircleOutlinedIcon sx={{ fontSize: 60, color: '#255FFF' }} />
            </div>
            <div className={'fixed bottom-0 w-full bg-inherit backdrop-blur flex justify-between py-3 px-5'}>
                {items.map(item => (
                    <IconButton key={item.path} href={item.path}>
                        {pathname === item.path ?
                            item.selectedIcon
                            :item.defaultIcon
                        }
                    </IconButton>
                ))}
            </div>
        </>
    )
}