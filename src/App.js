import { React, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DataContext from "./DataContext";
import { Footer, Header, Main, Navbar, OrderOnline, Reservations } from "./components";
import ConfirmedBooking from "./components/Reservations/ConfirmedBooking";
import { headerData, orderOnline, reservationData } from "./constants";

function App() {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);

    // set path name on route change
    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname]);

    let data = {};
    if (path === "/" || path === "/home") {
        data = headerData;
    } else if (path === "/reserve") {
        data = reservationData;
    } else if (path === "/order") {
        data = orderOnline;
    }

    return (
        <>
            <Navbar />
            <DataContext.Provider value={data}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Main />
                            </>
                        }
                    />
                    <Route
                        path="/reserve"
                        element={
                            <>
                                <Reservations />
                            </>
                        }
                    />
                    <Route
                        path="/order"
                        element={
                            <>
                                <Header />
                                <OrderOnline />
                            </>
                        }
                    />
                    <Route path="/confirm" element={<ConfirmedBooking />} />
                    <Route
                        path="*"
                        element={
                            <>
                                <Header />
                                <Main />
                            </>
                        }
                    />
                </Routes>
            </DataContext.Provider>
            <Footer />
        </>
    );
}

export default App;
