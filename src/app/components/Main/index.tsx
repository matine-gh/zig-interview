'use client'
import Sidebar from "../Sidebar";
import {useState} from "react";
import Header from "@/app/components/Header";
import "../../globals.css";
import Footer from "@/app/components/Footer";

export default function Main() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    return (
        <>
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
                <Header  setIsSidebarOpen={setIsSidebarOpen}/>
                <div className={'flex-1 bg-pink-400'}>
                    main
                </div>
            </Sidebar>
            <Footer />
        </>
    )
}