import React from "react";
import './App.css';
import './media.css';
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="header-left"> 
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo"/>
                    <h1 className="logoH1">
                        MY PIZZA™
                        <p className="slogon">Безкоштовна доставка</p>
                    </h1>
                </Link>
            </div>
            <div className="phoneNumber">
                <p className="phone">(012) 345-67-89</p>
                <p className="schedule">Працюємо з 10:00 до 22:00</p>
            </div>
            <nav>
                <ul>
                    <li className="basketBtn"><Link to="/basket"><button><img src="./Cart.svg" alt="Cart"/>Кошик</button></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;