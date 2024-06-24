import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {HeaderInterface} from "@/app/components/Header/header.interface";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import Badge from '@mui/material/Badge';
import {IconButton} from "@mui/material";
import { styled } from '@mui/material/styles';
export default function Header({setIsSidebarOpen}: HeaderInterface) {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#FF0000',
            color: '#FF0000',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <div className={'flex justify-between items-center gap-3 px-5 py-4'}>
            <MenuOutlinedIcon onClick={()=> setIsSidebarOpen(true)}/>
            <h1 className={'flex-1 text-primary-dark text-lg font-black'}>CryptoGap</h1>
            <IconButton href={'/notification'}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot">
                    <NotificationsNoneOutlinedIcon sx={{color: '#000000'}}/>
                </StyledBadge>
            </IconButton>
            <a href={'/direct'}><InboxOutlinedIcon /></a>
        </div>
    )
}