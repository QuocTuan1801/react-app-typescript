import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutAdmin: React.FC = () =>{
    return(
        <div>
            <div>
                <Link to="/admin/dashboard">Dashboard  |</Link>
                <Link to="/admin/product">Product Manager  |</Link>
                <Link to="/admin/product/add">Add product  |</Link>
                <Link to="/admin/categories"> Category Manager  |</Link>
                <Link to="/admin/categories/add">Add category  |</Link>
                <Link to="/">Back</Link>
            </div>
            <Outlet />
        </div>
    );
};
export default LayoutAdmin;