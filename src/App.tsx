import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Basket from './Basket';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Pizza} from './Main';
import PizzaMaker from "./PizzaMaker"
import { TwoHalfPizza } from "./PizzaMaker";
import {AnyPizza} from "./Main";
import {getBasketFromLocalStorage} from "./Basket";
import Carousel from './Carousel';
import AboutCompany from './AboutCompany'; 

function App() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [basket, setBasket] = useState<AnyPizza[]>(getBasketFromLocalStorage());

  const fetchPizzas = () => {
    fetch('pizza.json')
      .then((response) => response.json())
      .then((jsonData: Pizza[]) => {
        setPizzas(jsonData);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const clearBasket = () => {
    setBasket([]);
  };

  return (
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Main pizzas={pizzas} basket={basket} setBasket={setBasket} setPizzas={setPizzas}/>}/>
          <Route path="/basket" element={<Basket basket={basket} clearBasket={clearBasket}/>}/>
          <Route path="/pizzamaker" element={<PizzaMaker pizzas={pizzas} basket={basket} setBasket={setBasket}/>}/>
          <Route path="/aboutCompany" element={<AboutCompany/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;