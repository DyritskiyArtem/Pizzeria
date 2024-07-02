import React from "react";
import './App.css';
import './media.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <div className="menu">
                <div className="div1">
                    <Link className="linkFooter" to={'/'}><p>Меню</p></Link>
                    <Link className="linkFooter" to={'/pizzaMaker'}><p>Конструктор піци</p></Link>
                </div>
                <div className="div2"><Link className="linkFooter" to={'/aboutCompany'}><p>Про компанію</p></Link></div>
            </div>
            <div className="socialNetworks">
                <div className="divSocialNetworks1">
                    <p className="pSocialNetworks"><img src="./socialNetworks/Viber.svg" alt="Viber"/>Viber</p>
                    <p className="pSocialNetworks"><img src="./socialNetworks/Facebook.svg" alt="Facebook"/>Facebook</p>
                    <p className="pSocialNetworks"><img src="./socialNetworks/Instagram.svg" alt="Instagram"/>Instagram</p>
                </div>
                <div className="divSocialNetworks2">
                    <p className="pSocialNetworks"><img src="./socialNetworks/Telegram.svg" alt="Telegram"/>Telegram</p>
                    <p className="pSocialNetworks"><img src="./socialNetworks/YouTube.svg" alt="YouTube"/>YouTube</p>
                </div>
            </div>
            <div className="div2Media"><Link className="linkFooter" to={'/aboutCompany'}><p>Про компанію</p></Link></div>
            <div>
                <p>Навчальний проект 2024 © Дурицький Артем. Створено на основі дизайну веб-сайту Pizza.Od.Ua</p>
            </div>
        </footer>
    )
}

export default Footer;