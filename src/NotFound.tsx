import React from 'react';
import Header from './Header';
import './NotFound.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function NotFound() {
  return (
    <div>
        <div className="divNotFound">
            <img src="./NotFound.png" alt="" />
            <p>На жаль, такої сторінки не існує. Ймовірно, її було видалено автором, або її тут ніколи не було. Є інші сторінки!</p>
            <Link to={'/'} className='Name'>Почніть із головної</Link>
        </div>
    </div>
  );
};

export default NotFound;