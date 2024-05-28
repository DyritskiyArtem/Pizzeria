import React, { useState, useLayoutEffect } from "react";
import './App.css';
import './Basket.css';
import { Pizza } from "./Main";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

interface BasketProps {
    pizzas: Pizza[];
    clearBasket: () => void;
  }

function Basket({ pizzas, clearBasket }: BasketProps) {
    const totalPrice = pizzas.reduce((total, pizza) => total + getPrice(pizza), 0);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [formData, setFormData] = useState({ name: '', address: '' });

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.name.length < 3) {
            alert("Ім'я має містити мінімум 3 символів");
            return;
        }

        if (formData.address.length < 6) {
            alert("Адреса має містити мінімум 6 символів");
            return;
        }

        alert('Замовлення оформлено');
    }

    function getPrice(pizza: Pizza): number {        
      if (pizza.cm == 25) {
          return pizza.price * 0.8;             
      }        
      if (pizza.cm == 30) {
          return pizza.price;             
      }
      if (pizza.cm == 35) {
          return pizza.price * 1.2;             
      }
      return pizza.price;
    }

    if (pizzas.length === 0) {
        return (
            <div className="basket">
                <h2>Ваш кошик</h2>
                <p className="emptyBasket">Ваша корзина порожня. Поверніться до меню та виберіть піцу</p>
                <Link to="/"><a className="aMenu2">Повернутися до меню</a></Link>
            </div>
        );
    }

    return (
        <div>
            <div className="basket">
                <h2>Ваш кошик</h2>
                <button className="btnClearBasket" onClick={clearBasket}>Очистити</button>

                <div className="mainDivBasketPizza">
                    {pizzas?.map((pizza, index) => (
                        <div className="BasketPizza" key={index}>
                            <img src={pizza.img} alt={pizza.name} />
                            <div>
                                <h2 className="pizzaName">{pizza.name}</h2>
                                <p className="pCmDough">{pizza.cm}, {pizza.dough} тісто</p>
                            </div>
                            <div className="divPrise"><p>{getPrice(pizza)} грн.</p></div>
                        </div>
                    ))}
                </div>

                <div className="buttons">
                    <Link to="/"><a className="aMenu">Повернутися до меню</a></Link>
                    <div>
                        <p>До сплати: {totalPrice} грн.</p>
                        <button onClick={handleOpenModal}>ЗРОБИТИ ЗАМОВЛЕННЯ</button>
                    </div>
                </div>
            </div>

        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} className="Modal" overlayClassName="Overlay" contentLabel="Оформлення замовлення">
            <div className="Modal-header">
              <h2 className="Modal-title">Оформлення замовлення</h2>
              <span className="Modal-close" onClick={handleCloseModal}>&times;</span>
            </div>
            <div className="Modal-content">
              <form onSubmit={handleSubmit}>
                <div className="nameAndPhone">
                  <div className="divInput">
                    <label htmlFor="name">Ім'я:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ім'я"
                      value={formData.name}
                      onChange={handleChange}
                      className="Modal-input"
                      required
                    />
                  </div>

                  <div className="divInput">
                    <label htmlFor="phone">Номер телефону:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Номер телефону"
                      className="Modal-input"
                      required
                    />
                  </div>
                </div>

                <label htmlFor="address">Адреса:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Адреса"
                  value={formData.address}
                  onChange={handleChange}
                  className="Modal-input"
                  required
                />

                <button type="submit" className="Modal-button">Підтвердити замовлення</button>
              </form>
            </div>
        </Modal>

      </div>
    );
}

export default Basket;