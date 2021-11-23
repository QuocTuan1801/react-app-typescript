import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const LayoutWebsite: React.FC = ()=>{
    return(
        <div>
            <Header />
            LayoutWebsite
            <Outlet/>
        </div>
    )
}
export default LayoutWebsite;