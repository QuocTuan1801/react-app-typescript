import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Menu} from "antd";

const Header : React.FC = () =>{
    const [current, setCurrent] = useState<string>("yeah");
    return (
        <div>
            <Menu onClick= {(e)=> setCurrent(e.key)} selectedKeys={[current]} mode = "horizontal">
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/product">Products</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/admin">Admin</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signup">Đăng Ký</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signin">Đăng Nhập</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default Header;