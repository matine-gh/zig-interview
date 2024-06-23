import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import {GeneralViewInterface} from "@/app/components/common/GeneralView/generalView.interface";

export default function GeneralView({text}: GeneralViewInterface) {
    return (
        <div className={'text-2xl space-x-3 p-4'}>
            <a href={'/'}><KeyboardBackspaceOutlinedIcon /></a>
            <b>{text}</b>
        </div>
    )
}