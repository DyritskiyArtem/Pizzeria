import React, { useState, useEffect, useLayoutEffect } from "react";
import baners from "./baners.png";
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { log } from "console";
import { TwoHalfPizza } from "./PizzaMaker"
import {setLocalStorageFromBasket} from "./Basket";
import Carousel from "./Carousel";

export interface Pizza {
    img: string,
    name: string,
    cm: number,
    dough: Dough,
    price: number,
    ingredients: string[]
}

export type AnyPizza = Pizza | TwoHalfPizza;

export function instanceOfPizza(object: any): object is Pizza {
    return 'ingredients' in object;
}

interface MainProps {
    pizzas: Pizza[],
    basket: (AnyPizza)[],
    setBasket: (basket: (AnyPizza)[]) => void,
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

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    function addBasket(pizza: Pizza) {
        console.log(pizza);

        const newBasket = [...basket];
        newBasket.push(pizza);
        setBasket(newBasket);

        setLocalStorageFromBasket(newBasket);
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

    function onChangeCentimeters(cm: number, index: number) {
        const newPizzas = [...pizzas];
        const pizza = newPizzas[index];
        const newPizza = { ...pizza, cm };
        newPizzas[index] = newPizza;
        setPizzas(newPizzas);
    }

    function getPrice(pizza: Pizza): number {        
        let price = pizza.price;        
        if (pizza.cm == 25) {
            price = price * 0.8;
        }        
        if (pizza.cm == 30) {
            price = price;             
        }
        if (pizza.cm == 35) {
            price = price * 1.2;        
        }
        if (pizza.dough == Dough.Thin){
            price = price;
        }
        if (pizza.dough == Dough.Lush){
            price = price + 10;
        }
        if (pizza.dough == Dough.HotDog){
            price = price + 20;
        }

        return price;
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
                        <div className="centimeters">
                            <p onClick={(e) => onChangeCentimeters(25, index)} className={(pizza.cm === 25) ? "active" : ""}>25 см</p>
                            <p onClick={(e) => onChangeCentimeters(30, index)} className={(pizza.cm === 30) ? "active" : ""}>30 см</p>
                            <p onClick={(e) => onChangeCentimeters(35, index)} className={(pizza.cm === 35) ? "active" : ""}>35 см</p>
                        </div>
                        <div className="dough">
                            <p>Тісто</p>
                            <select className="selectDough" onChange={(e) => onChangeSelect(e, index)} value={pizza.dough}>{doughOptions}</select>
                        </div>
                        <div className="order"><p>{getPrice(pizza)} грн.</p><Link to={'/basket'} className='Name'><button onClick={() => addBasket(pizza)}>ЗАМОВИТИ</button></Link></div>
                        <p>{pizza.ingredients.join(' • ')}</p>
                    </div>
                )}
            </div>
            <Carousel minWidth={1052} minHeight={273} images={["/carouselImg/baner1.png", "/carouselImg/baner2.png", "/carouselImg/baner3.png", "/carouselImg/baner4.png"]} dots={true} autoScroll={true}/>  
        </main>
    )
}

export default Main;