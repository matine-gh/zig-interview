'use client'
import Sidebar from "../Sidebar";
import {useState} from "react";
import Header from "@/app/components/Header";
import "../../globals.css";

export default function Main() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    return (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
            <Header  setIsSidebarOpen={setIsSidebarOpen}/>
            main
        </Sidebar>
    )
}