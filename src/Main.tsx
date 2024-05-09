import React, { useState, useEffect, useLayoutEffect } from "react";
import baners from "./baners.png";
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { log } from "console";

export interface Pizza {
    img: string,
    name: string,
    cm: number,
    dough: Dough,
    price: number,
    ingredients: string[]
}

interface MainProps {
    pizzas: Pizza[],
    basket: Pizza[],
    setBasket: (basket: Pizza[]) => void,
    setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>
}

export enum Dough {
    Lush = "пишне",
    Thin = "тонке",
    HotDog = "хот-дог"
}

function Main({ pizzas, basket, setBasket, setPizzas }: MainProps) {

    const doughOptions = Object.values(Dough).map((dough) => (
        <option key={dough} value={dough}>
            {dough}
        </option>
    ));

    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // });

    function addBasket(pizza: Pizza) {
        console.log(pizza);

        const newBasket = [...basket];
        newBasket.push(pizza);
        setBasket(newBasket);
    }

    function onChangeSelect(e: React.ChangeEvent<HTMLSelectElement>, index: number) {
        const doughSelect = e.target;
        const dough = doughSelect.value as Dough;
        const newPizzas = [...pizzas];
        const pizza = newPizzas[index];
        const newPizza = { ...pizza, dough };
        newPizzas[index] = newPizza;
        setPizzas(newPizzas);
    }

    return (
        <main>
            <div className="title">
                <h1>Меню</h1>
                <Link to={'/pizzamaker'}><img src={baners}/></Link>
            </div>

            <div className="divPizza">
                {pizzas?.map((pizza, index) =>
                    <div className="pizza1" key={index}>
                        <img src={pizza.img} />
                        <h2>{pizza.name}</h2>
                        <div className="centimeters"><p className={(pizza.cm === 25) ? "active" : ""}>25 см</p><p className={(pizza.cm === 30) ? "active" : ""}>30 см</p><p className={(pizza.cm === 35) ? "active" : ""}>35 см</p></div>
                        <div className="dough">
                            <p>Тісто</p>
                            <select className="selectDough" onChange={(e) => onChangeSelect(e, index)} value={pizza.dough}>{doughOptions}</select>
                        </div>
                        <div className="order"><p>{pizza.price} грн.</p><Link to={'/basket'} className='Name'><button onClick={() => addBasket(pizza)}>ЗАМОВИТИ</button></Link></div>
                        <p>{pizza.ingredients.join(' • ')}</p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Main;