import React from "react";
import logoIcon from "../images/logo.svg";
import Products from "../pages/Products";
import About from "../pages/About";
import Service from "../pages/Service";
import Contacts from "../pages/Contacts";
import {BrowserRouter as Router,Route,Routes,NavLink} from "react-router-dom";
import calcIcon from "../images/calculation.svg";
import measIcon from "../images/measering.svg";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <Router>
            <header className={styles.navig}>
                <div className={styles.logo}>
                    <img src={logoIcon} alt="" />
                </div>
                <nav  className={styles.navL}>
                    <NavLink to="/Products">Продукты</NavLink>
                    <NavLink to="/Service">Услуги</NavLink>
                    <NavLink to="/Contacts">Контакты</NavLink>
                    <NavLink to="/About">О нас</NavLink>
                </nav>
                <div className={styles.buttons}>
                    <button className={styles.reque}>
                        <img src={measIcon} alt="" />
                        Make request
                    </button>
                    <button className={styles.calculator}>
                        <img src={calcIcon} alt="" />
                        Calculation
                    </button>
                </div>
            </header>
            <Routes>
                <Route path="/Service" element={<Service />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/About" element={<About />} />
                <Route path="/" element={<Service />} />
            </Routes>
        </Router>
    );
};

export default Nav;
