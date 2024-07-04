import React, {useState, useLayoutEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './PizzaMaker.css';
import './App.css';
import { Pizza } from './Main';
import { Dough } from './Main';
import { getPrice } from './Basket';
import {AnyPizza} from "./Main";
import {setLocalStorageFromBasket} from "./Basket";
import PizzaBanner from "./PizzaBanner";

interface PizzaMakerProps { 
    pizzas: Pizza[],
    basket: (AnyPizza)[], 
    setBasket: (basket: (AnyPizza)[]) => void,
}

export interface TwoHalfPizza{
    pizza1: Pizza | null,
    pizza2: Pizza | null,
    souse: Souse,
    dough: Dough,
}

export function instanceOfTwoHalfPizza(object: any): object is TwoHalfPizza {
    return 'souse' in object;
}

export enum Souse{
    Ranch = "ранч",
    Tomato = "томатний",
    Plum = "сливовий",
    Cheese = "сирний",
    BBQ = "BBQ",
}

function PizzaMaker({ pizzas, basket, setBasket }: PizzaMakerProps) {
    const pizzaOptions = pizzas.map((pizza, index) => (
        <option key={pizza.name} value={index}>
          {pizza.name}
        </option>
    ));

    const [twoHalfPizza, setTwoHalfPizza] = useState<TwoHalfPizza>({
        pizza1: null, pizza2: null, souse: Souse.Ranch, dough: Dough.Thin
    });

    function handleChange(e: React.FormEvent<HTMLSelectElement>) {
        const pizzaSelect = e.target as HTMLSelectElement;
        const index = +pizzaSelect.value;
      
        if (index === -1) {
          setTwoHalfPizza({ ...twoHalfPizza, pizza1: null });
        } else {
          const pizza = pizzas[index];
          setTwoHalfPizza({ ...twoHalfPizza, pizza1: pizza });
        }
      }

      function handleChange2(e: React.FormEvent<HTMLSelectElement>) {
        const pizzaSelect2 = e.target as HTMLSelectElement;
        const index2 = +pizzaSelect2.value;
      
        if (index2 === -1) {
          setTwoHalfPizza({ ...twoHalfPizza, pizza2: null });
        } else {
          const pizza2 = pizzas[index2];
          setTwoHalfPizza({ ...twoHalfPizza, pizza2: pizza2 });
        }
      }

    function addSouse(souse: Souse) {
        const newTowHalfPizza = {...twoHalfPizza, souse};
        setTwoHalfPizza(newTowHalfPizza);
    }

    function addDough(dough: Dough) {
        const newTowHalfPizza = {...twoHalfPizza, dough};
        setTwoHalfPizza(newTowHalfPizza);
    }

    function areAllOptionsSelected(twoHalfPizza: TwoHalfPizza): boolean {
        return (
          twoHalfPizza.pizza1 !== null && twoHalfPizza.pizza2 !== null
        );
      }

    const navigate = useNavigate();

    function addBasket(twoHalfPizza: TwoHalfPizza) {
        console.log(twoHalfPizza);
      
        const newBasket = [...basket];
        newBasket.push(twoHalfPizza);
        setBasket(newBasket);

        setLocalStorageFromBasket(newBasket);
      
        navigate('/basket');
    }

    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // });

    return (

    <>
        <div className="mainPizzaMakers">
            <h1>Дві улюблених в одній піці</h1>
            <div>
                <div className="twoPizzas">
                    <div className="divTwoPizzas">
                        {twoHalfPizza.pizza1 == null ? 
                            <img className="halfPizza" src="/PizzaMaker/half1.png"/> :
                            <div className="pizzaContainer1"><img className="imgPizza1" src={twoHalfPizza.pizza1.img} alt=""/></div>
                        }
                        {twoHalfPizza.pizza2 == null ? 
                            <img className="halfPizza" src="/PizzaMaker/half2.png"/> :
                            <div className="pizzaContainer2"><img className="imgPizza2" src={twoHalfPizza.pizza2.img} alt=""/></div>
                        }
                    </div>
                </div>
                <div className="divMaking">
                    <div className="lineOne">
                        <div className="choosingPizza">
                            <h3><strong>Крок №1</strong> - Оберіть першу половину піци:</h3>
                            <h3><strong>Крок №2</strong> - Оберіть другу половину піци:</h3>
                        </div>
                        <div className="choosingPizza">
                        <select className="selectName" onChange={handleChange} value={twoHalfPizza.pizza1 ? pizzas.indexOf(twoHalfPizza.pizza1) : -1}><option value="-1">Оберіть піцу...</option>{pizzaOptions}</select>
                        <select className="selectName" onChange={handleChange2} value={twoHalfPizza.pizza2 ? pizzas.indexOf(twoHalfPizza.pizza2) : -1}><option value="-1">Оберіть піцу...</option>{pizzaOptions}</select>
                        </div>
                    </div>
                    <div className="lineTwo">
                        <h3><strong>Крок №3</strong> - Оберіть спільний соус - основу:</h3>

                        <div className="divFilling">
                            <div className="column1"></div>
                        <div className="filling" onClick={() => addSouse(Souse.Ranch)}>
                            <div className="divCirclePizza"><div className="circlePizza"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.souse == Souse.Ranch}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Ранч (основа)</p>
                        </div>
                        
                        <div className="filling" onClick={() => addSouse(Souse.Tomato)}>
                            <div className="divCirclePizza"><div className="circlePizza circlePizza2"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.souse == Souse.Tomato}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Томатний</p>
                        </div>
                        
                        <div className="filling" onClick={() => addSouse(Souse.Plum)}>
                            <div className="divCirclePizza"><div className="circlePizza circlePizza3"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.souse == Souse.Plum}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Сливовий</p>
                        </div>
                        
                        <div className="filling" onClick={() => addSouse(Souse.Cheese)}>
                            <div className="divCirclePizza"><div className="circlePizza circlePizza4"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.souse == Souse.Cheese}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Сирний</p>
                        </div>
                        
                        <div className="filling" onClick={() => addSouse(Souse.BBQ)}>
                            <div className="divCirclePizza"><div className="circlePizza circlePizza5"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.souse == Souse.BBQ}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>BBQ (основа)</p>
                        </div>
                        </div>
                    </div>
                    <div className="lineTree">
                        <h3><strong>Крок №4</strong> - Выберіть тип тіста:</h3>

                        <div className="divFilling">
                        <div className="filling filling2" onClick={() => addDough(Dough.Thin)}>
                            <div className="divCirclePizza"><img src="/PizzaMaker/thin.png" alt="thin"/></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.dough == Dough.Thin}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Тонке</p>
                        </div>

                        <div className="filling filling2" onClick={() => addDough(Dough.Lush)}>
                            <div className="divCirclePizza"><img src="/PizzaMaker/lush.png" alt="lush"/></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.dough == Dough.Lush}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Пишне</p>
                        </div>

                        <div className="filling filling2" onClick={() => addDough(Dough.HotDog)}>
                            <div className="divCirclePizza"><img src="/PizzaMaker/HotDog.png" alt="Hot-dog"/></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox" checked={twoHalfPizza.dough == Dough.HotDog}/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Hot dog</p>
                        </div>                    
                    </div>
                    </div>
                    <div className="lineFour">
                        <h1>Ціна: {getPrice(twoHalfPizza)}грн</h1>
                        <button
                        className={`btnAddBasket ${areAllOptionsSelected(twoHalfPizza) ? 'active' : ''}`} onClick={() => addBasket(twoHalfPizza)} disabled={!areAllOptionsSelected(twoHalfPizza)}>
                        Додати в кошик</button>
                    </div>
                </div>
            </div>
        </div>
        <PizzaBanner/>
    </>
    )
};

export default PizzaMaker;