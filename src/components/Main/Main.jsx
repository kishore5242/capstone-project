import React from "react";
import About from "./About/About";
import "./Main.css";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";

export default function Main() {
    return (
        <>
            {/* <Header data = { data.type } /> */}
            <main>
                <Specials />
                <Testimonials />
                <About />
            </main>
        </>
    );
}
