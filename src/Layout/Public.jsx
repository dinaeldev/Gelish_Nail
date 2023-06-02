import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Public = () => {
    const [title, setTitle] = useState('');
    const location = useLocation();
    useEffect(() => {
        setTitle(location.pathname.slice(1));
    }, [location.pathname]);

    return (
        <>
            <header>
                <Header />
            </header>
            <div className="globo">
                <div className="contenido container">
                    <h2 className="helvetica-h1 uppercase">{title !== '' ? title : 'Home'}</h2>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Public
