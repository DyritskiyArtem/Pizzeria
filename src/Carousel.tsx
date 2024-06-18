import React, { useState } from "react";
import "./Carousel.css";
import CarouselDots from "./CarouselDots";
import { iterMessages } from "telegram/client/messages";

function Carousel() {
    const images = [
        "/pizza/peperoni.png",
        "/pizza/fourCheeses.png",
        "/pizza/hawaiian.png",
        "/pizza/pepperoni in Hawaii.png",
    ];
    const [navigateImg, setNavigateImg] = useState(0);

    function onClickLeft() {setNavigateImg((navigateImg - 1 + images.length) % images.length);}
    function onClickRight() {setNavigateImg((navigateImg + 1) % images.length);}

    function setImageByIndex(index: number) {
        setNavigateImg(index)
    }

    return (
        <div className="carousel">
            <div className="line1">
                <p className="left" onClick={onClickLeft}>&lt;</p>
                <div className="divCarousel">
                    {images.map((item, index) => <img className="imgCarousel" src={images[index]}/>)}
                </div>
                <p className="right" onClick={onClickRight}>&gt;</p>
            </div>
            <div className="line2">
                <CarouselDots currentIndex={navigateImg} totalItems={images.length} setImageByIndex={setImageByIndex}/>
            </div>
        </div>
    );
}


export default Carousel;