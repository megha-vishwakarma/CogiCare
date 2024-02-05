import React from "react";
import logo from "../../assets/img/logo.gif"

// import navigation data
import { navigationData } from "../../data";
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate();
    const [isMenuHidden, setMenuHidden] = React.useState(true);

    const toggleMenu = () => {
        console.log(isMenuHidden);
        setMenuHidden(!isMenuHidden);
    };



    const onCLickHandler = (path) => {
        setMenuHidden(true);
        navigate("/");
    };

    return (
        <nav className=" flex flex-wrap items-center justify-between w-full py-2 md:py-4 px-4 text-lg text-gray-700 bg-white shadow-md ">
            {/* <h1
                className="md:text-2xl text-xl font-bold cursor-pointer"
                onClick={() => {
                    onCLickHandler("/");
                }}
            >
                Cogni{" "}
                <span className=" font-semibold md:text-3xl text-2xl text-blue-700">
                Care
                </span>{" "}
            </h1> */}

            <img 
            onClick={() => {
                onCLickHandler("/");
            }}
            className=" cursor-pointer w-60" src= {logo} alt="logo"/>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>

            <div
                className={`w-full md:flex md:items-center md:w-auto ${
                    isMenuHidden ? "hidden" : ""
                }`}
                id="menu"
            >
                <ul className="flex gap-x-4">
                    <h2 className="cursor-pointer text-black font-semibold" onClick={()=>{navigate("/game-menu")}}>Games</h2>
                    {navigationData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};


export default Nav;
