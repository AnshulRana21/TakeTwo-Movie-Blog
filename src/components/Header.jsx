import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router";
import LogoutBtn from "./LogoutBtn";

const Header = () => {

    const authStatus = useSelector((state) => state.auth.status)

    const navItems = [
        {
            name: "HOME",
            path: "/",
            active: true
        },
        {
            name: "ABOUT",
            path: "/about",
            active: !authStatus
        },
        {
            name: "LOGIN",
            path: "/login",
            active: !authStatus
        },
        {
            name: "HUB",
            path: "/all-post",
            active: authStatus
        },
        {
            name: "CREATE",
            path: "/add-post",
            active: authStatus
        },
        
    ]

    return (

        
        <header className="bg-transparent absolute top-0 left-0 w-full px-6 py-3 flex justify-between items-center z-10 font-mono">
            {/* Left: Logo */}
            <div className={"text-4xl font-bold flex items-center gap-2"}>
                

                <span>Take:Two</span>
            </div>

            {/* Right: Auth Links */}
            <ul className="flex items-center gap-7">

                {navItems.map((item) =>


                    item.active ? (

                        <li key={item.name}>
                            <NavLink
                                to = {item.path}
                                className="text-black bg-white font-semibold tracking-widest px-5 py-2 rounded-xl shadow-emerald-800 shadow-md hover:bg-black hover:text-white hover:border hover:border-black "
                            >{item.name}</NavLink>
                        </li>

                    ) : null


                )}

                {authStatus && (
                    <li>
                        <LogoutBtn/>
                    </li>
                )}
                
            </ul>
        </header>
    );
};

export default Header;
