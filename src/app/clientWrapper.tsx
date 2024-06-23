'use client'
import React, {ReactNode, useState} from "react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ClientWrapper({children}: { children: ReactNode }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

    return (
        <>
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
                <Header  setIsSidebarOpen={setIsSidebarOpen}/>
                {children}
            </Sidebar>
            <Footer />
        </>
    )
}