import React, {useState} from "react";
import './PizzaMaker.css';
import './App.css';
import { Pizza } from './Main';
import { Dough } from './Main';

interface PizzaMakerProps { pizzas: Pizza[] }

interface TwoHalfPizza{
    pizza1: Pizza | null,
    pizza2: Pizza | null,
    souse: Souse,
    dough: Dough,
}

enum Souse{
    Ranch = "ранч",
    Tomato = "томатний",
    Plum = "сливовий",
    Cheese = "сирний",
    BBQ = "BBQ",
}

function PizzaMaker({ pizzas }: PizzaMakerProps) {
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
        console.log(index);
        
        const pizza = pizzas[index];
        setTwoHalfPizza({...twoHalfPizza, pizza1: pizza});        
    }

    function handleChange2(e: React.FormEvent<HTMLSelectElement>) {
        const pizzaSelect2 = e.target as HTMLSelectElement;
        const index2 = +pizzaSelect2.value;
        console.log(index2);
        
        const pizza2 = pizzas[index2];
        setTwoHalfPizza({...twoHalfPizza, pizza2: pizza2});     
    }

    function addSouse(souse: Souse) {
        const newTowHalfPizza = {...twoHalfPizza, souse};
        setTwoHalfPizza(newTowHalfPizza);
    }

    function addDough(dough: Dough) {
        const newTowHalfPizza = {...twoHalfPizza, dough};
        setTwoHalfPizza(newTowHalfPizza);
    }

    function getPrice(twoHalfPizza: TwoHalfPizza): number {  
        if (twoHalfPizza.pizza1 == null || twoHalfPizza.pizza2 == null) {return 0;}
        let price = getPrice2(twoHalfPizza.pizza1) / 2 + getPrice2(twoHalfPizza.pizza2) / 2;
        if (twoHalfPizza.souse == Souse.Ranch) {
            price = price + 4;
        }        
        if (twoHalfPizza.souse == Souse.Tomato) {
            price = price + 6;             
        }
        if (twoHalfPizza.souse == Souse.Plum) {
            price = price + 5;        
        }
        if (twoHalfPizza.souse == Souse.Cheese) {
            price = price + 7;        
        }
        if (twoHalfPizza.souse == Souse.BBQ) {
            price = price + 7;        
        }

        if (twoHalfPizza.dough == Dough.Thin){
            price = price;
        }
        if (twoHalfPizza.dough == Dough.Lush){
            price = price + 10;
        }
        if (twoHalfPizza.dough == Dough.HotDog){
            price = price + 20;
        }

        return price;
    }

    function getPrice2(pizza: Pizza): number {        
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
                            <select className="selectName" onChange={handleChange}><option>Оберіть піцу...</option>{pizzaOptions}</select>
                            <select className="selectName" onChange={handleChange2}><option>Оберіть піцу...</option>{pizzaOptions}</select>
                        </div>
                    </div>
                    <div className="lineTwo">
                        <h3><strong>Крок №3</strong> - Оберіть спільний соус - основу:</h3>

                        <div className="divFilling">
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
                        <button className="btnAddBasket">Додати в кошик</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PizzaMaker;