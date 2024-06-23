import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import {GeneralViewInterface} from "@/app/components/common/GeneralView/generalView.interface";
import {IconButton} from "@mui/material";

export default function GeneralView({text}: GeneralViewInterface) {
    return (
        <div className={'text-2xl space-x-3 p-4'}>
            <IconButton href={'/'}>
                <KeyboardBackspaceOutlinedIcon />
            </IconButton>
            <b>{text}</b>
        </div>
    )
}