import React from 'react';
import Header from './Header';
import './NotFound.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function NotFound() {
  return (
    <div>
        <div className="divNotFound">
            <img src="./NotFound.png" alt="" />
            <p>К сожалению, такой страницы не существует. Вероятно, она была удалена <br/> автором, либо ее здесь никогда не было. Есть другие страницы!</p>
            <Link to={'/'} className='Name'>Начните с главной</Link>
        </div>
    </div>
  );
};

export default NotFound;