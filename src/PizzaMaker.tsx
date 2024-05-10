import React, {useState} from "react";
import './PizzaMaker.css';
import './App.css';
import { Pizza } from './Main';

interface PizzaMakerProps { pizzas: Pizza[] }

function PizzaMaker({ pizzas }: PizzaMakerProps) {
    const pizzaOptions = pizzas.map((pizza, index) => (
        <option key={pizza.name} value={index}>
          {pizza.name}
        </option>
    ));

    const [pizza1, setPizza1] = useState<Pizza | null>(null);
    const [pizza2, setPizza2] = useState<Pizza | null>(null);

    function handleChange(e: React.FormEvent<HTMLSelectElement>) {
        const pizzaSelect = e.target as HTMLSelectElement;
        const index = +pizzaSelect.value;
        console.log(index);
        
        const pizza = pizzas[index];
        setPizza1(pizza);        
    }

    function handleChange2(e: React.FormEvent<HTMLSelectElement>) {
        const pizzaSelect2 = e.target as HTMLSelectElement;
        const index2 = +pizzaSelect2.value;
        console.log(index2);
        
        const pizza2 = pizzas[index2];
        setPizza2(pizza2);        
    }

    return (


        <div className="mainPizzaMakers">
            <h1>Дві улюблених в одній піці</h1>
            <div>
                <div className="twoPizzas">
                    <div className="divTwoPizzas">
                        {pizza1 == null ? 
                            <img className="halfPizza" src="/PizzaMaker/half1.png"/> :
                            <div className="pizzaContainer1"><img className="imgPizza1" src={pizza1.img} alt=""/></div>
                        }
                        {pizza2 == null ? 
                            <img className="halfPizza" src="/PizzaMaker/half2.png"/> :
                            <div className="pizzaContainer2"><img className="imgPizza2" src={pizza2.img} alt=""/></div>
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
                        <div className="filling">
                            <div className="divCirclePizza"><div className="circlePizza"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Ранч (основа)</p>
                        </div>
                        
                        <div className="filling">
                            <div className="divCirclePizza"><div className="circlePizza circlePizza2"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Томатний</p>
                        </div>
                        
                        <div className="filling">
                            <div className="divCirclePizza"><div className="circlePizza circlePizza3"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Сливовий</p>
                        </div>
                        
                        <div className="filling">
                            <div className="divCirclePizza"><div className="circlePizza circlePizza4"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Сирний</p>
                        </div>
                        
                        <div className="filling">
                            <div className="divCirclePizza"><div className="circlePizza circlePizza5"></div></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
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
                        <div className="filling filling2">
                            <div className="divCirclePizza"><img src="/PizzaMaker/thin.png" alt="thin"/></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Тонке</p>
                        </div>

                        <div className="filling filling2">
                            <div className="divCirclePizza"><img src="/PizzaMaker/lush.png" alt="lush"/></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Пишне</p>
                        </div>

                        <div className="filling filling2">
                            <div className="divCirclePizza"><img src="/PizzaMaker/HotDog.png" alt="Hot-dog"/></div>
                            <div className="content">
                                <label className="checkBox">
                                    <input id="ch1" type="checkbox"/>
                                    <div className="transition"></div>
                                </label>
                            </div>
                            <p>Hot dog</p>
                        </div>                    
                    </div>
                    </div>
                    <div className="lineFour">
                        <h1>Ціна: 0грн</h1>
                        <button className="btnAddBasket">Додати в кошик</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PizzaMaker;