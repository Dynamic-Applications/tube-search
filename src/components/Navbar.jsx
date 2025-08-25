
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { personalInfo } from "../data/appData.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";



const getNavItems = (isLoggedIn) => [
    isLoggedIn
        ? { name: "Logout", to: "/logout", type: "action" }
        : { name: "Log In", to: "/login", type: "route" },
    { name: "PlayLists", to: "/playlists", type: "route" },
    { name: "Profile", to: "/profile", type: "route" },
    { name: "Feedback", to: "/contact", type: "route" },
    // { name: "Experience", to: "experience", type: "scroll" },
    // { name: "Contact", to: "contact", type: "scroll" },
];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    useEffect(() => {
        const onStorage = () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        window.location.href = "/";
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled || isOpen
                    ? "bg-secondary-bg shadow-lg py-4"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <RouterLink
                    to="/"
                    className="flex items-center text-2xl font-bold font-mono text-accent-1 cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <img
                        alt=""
                        src="react.svg"
                        className="size-9 rounded-full bg-gray-800 outline -outline-offset-2"
                    />
                    <span className="ml-2">{personalInfo.name}</span>
                </RouterLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {getNavItems(isLoggedIn).map((item) => (
                        item.type === "route" ? (
                            <RouterLink
                                key={item.name}
                                to={item.to}
                                className="text-text-secondary hover:text-accent-1 font-mono transition-colors cursor-pointer"
                            >
                                {item.name}
                            </RouterLink>
                        ) : item.type === "action" ? (
                            <button
                                key={item.name}
                                onClick={handleLogout}
                                className="text-text-secondary hover:text-accent-1 font-mono transition-colors cursor-pointer bg-transparent border-none outline-none"
                                style={{ background: "none" }}
                            >
                                {item.name}
                            </button>
                        ) : (
                            <ScrollLink
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-text-secondary hover:text-accent-1 font-mono transition-colors cursor-pointer"
                                activeClass="text-accent-1"
                                spy={true}
                            >
                                {item.name}
                            </ScrollLink>
                        )
                    ))}
                    {/* <a
                        href={personalInfo.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 font-mono border-2 border-accent-1 text-accent-1 rounded hover:bg-accent-1 hover:text-primary-bg transition-all duration-300"
                    >
                        Resume
                    </a> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-accent-1 focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-secondary-bg mt-2 py-2"
                >
                    {getNavItems(isLoggedIn).map((item) => (
                        item.type === "route" ? (
                            <RouterLink
                                key={item.name}
                                to={item.to}
                                className="block px-4 py-3 text-text-secondary hover:text-accent-1 hover:bg-primary-bg font-mono transition-colors cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </RouterLink>
                        ) : item.type === "action" ? (
                            <button
                                key={item.name}
                                onClick={() => { setIsOpen(false); handleLogout(); }}
                                className="block px-4 py-3 text-text-secondary hover:text-accent-1 hover:bg-primary-bg font-mono transition-colors cursor-pointer bg-transparent border-none outline-none text-left w-full"
                                style={{ background: "none" }}
                            >
                                {item.name}
                            </button>
                        ) : (
                            <ScrollLink
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="block px-4 py-3 text-text-secondary hover:text-accent-1 hover:bg-primary-bg font-mono transition-colors cursor-pointer"
                                activeClass="text-accent-1 bg-primary-bg"
                                spy={true}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </ScrollLink>
                        )
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
