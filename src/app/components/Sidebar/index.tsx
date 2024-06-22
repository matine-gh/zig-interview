'use client'
import {SidebarInterface} from "./sidebar.interface";
import Header from "@/app/components/Header";

export default function Sidebar(props: SidebarInterface) {

    const items = [
        {
            label: 'Item 1',
            path: '/',
        },
        {
            label: 'Item 2',
            path: '/',
        },
        {
            label: 'Item 3',
            path: '/',
        },
        {
            label: 'Item 4',
            path: '/',
        },
    ]

    const handleModalOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            props.setIsSidebarOpen(false);
        }
    };

    return (
        <div className={'bg'}>
            <div>
                {
                    props.isSidebarOpen &&
                    <div className={'h-full absolute z-40 top-0 right-0 min-h-200 w-screen bg-secondary-17 bg-opacity-40'}
                         onClick={handleModalOverlayClick}>
                        <aside id="separator-sidebar"
                               className={'h-full z-40 transition-transform sm:translate-x-0 bg-secondary-01 overflow-scroll w-7/12 min-w-60 max-w-80'}
                               aria-label="Sidebar">
                            <div className="py-4 overflow-y-auto text-secondary-17 divide-y-2">
                                <ul className={"h-screen-120 space-y-2 font-medium snap-start snap-y touch-pan-y overflow-y-scroll"}>
                                    {
                                        items.map(item => (
                                            <li key={item.label}>
                                                <a href={`${item.path}`}
                                                   className={'flex items-center px-6 py-4 hover:bg-primary-01 ' +
                                                       'hover:text-primary hover:border-r hover:border-r-2 hover:border-primary ' +
                                                       'group active:text-primary active:border-r active:border-r-2 active:border-primary'}>
                                                    <span className="ms-3 group-hover:font-semibold">{item.label}</span>
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </aside>
                    </div>
                }
            </div>
            <div>
                {props.children}
            </div>
        </div>


    )
}