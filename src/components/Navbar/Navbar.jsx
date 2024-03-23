import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import "./Navbar.css";

import { Link } from "react-router-dom";

// Navigate to Coponents on with id on different page
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            {/* Desktop Navigation */}

            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>

            <ul className="app__navbar-links">
                <Link className="link" to={"/"}>
                    Home
                </Link>
                <Link className="link" to={"/reserve"}>
                    Reservation
                </Link>
                <Link className="link" to={"/order"}>
                    Order
                </Link>
                <HashLink className="link" smooth to="/#Menu">
                    Menu
                </HashLink>
                <HashLink className="link" smooth to="/#About">
                    About
                </HashLink>
            </ul>

            {/* Mobile Navigation */}

            <div className="app__navbar-menu">
                <HiMenuAlt4
                    onClick={() => {
                        setToggle(true);
                    }}
                    className="app__navbar-hamburger"
                />
                {toggle && (
                    <div>
                        <HiX
                            onClick={() => {
                                setToggle(false);
                            }}
                            className="app__navbar-cancel"
                        />

                        <Link
                            className="link"
                            to={"/"}
                            onClick={() => {
                                setToggle(false);
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            className="link"
                            to={"/reserve"}
                            onClick={() => {
                                setToggle(false);
                            }}
                        >
                            Reservation
                        </Link>
                        <Link
                            className="link"
                            to={"/order"}
                            onClick={() => {
                                setToggle(false);
                            }}
                        >
                            Order
                        </Link>
                        <HashLink
                            className="link"
                            smooth
                            to="/#Menu"
                            onClick={() => {
                                setToggle(false);
                            }}
                        >
                            Menu
                        </HashLink>
                        <HashLink
                            className="link"
                            smooth
                            to="/#About"
                            onClick={() => {
                                setToggle(false);
                            }}
                        >
                            About
                        </HashLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
