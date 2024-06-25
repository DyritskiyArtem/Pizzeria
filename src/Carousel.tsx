import React, { useState, useEffect } from "react";
import "./Carousel.css";
import CarouselDots from "./CarouselDots";

interface CarouselProps{
    minWidth: number,
    minHeight: number,
}

function Carousel({minWidth, minHeight}: CarouselProps) {
    const images = [
        "/carouselImg/baner1.png",
        "/carouselImg/baner2.png",
        "/carouselImg/baner3.png",
        "/carouselImg/baner4.png",
    ];
    const [navigateImg, setNavigateImg] = useState(0);

    function onClickLeft() {setNavigateImg((navigateImg - 1 + images.length) % images.length);}
    function onClickRight() {setNavigateImg((navigateImg + 1) % images.length);}

    function setImageByIndex(index: number) {
        setNavigateImg(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setNavigateImg((navigateImg + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [navigateImg, images.length]);



    return (
        <div className="carousel">
            <div className="line1">
                <p className="left" onClick={onClickLeft}>&lt;</p>
            <div className="divCarousel" style={{ minWidth: minWidth + "px", minHeight: minHeight + "px"}}>
                    {images.map((item, index) => <img className="imgCarousel" src={images[index]} style={{
                        left: -1052 * navigateImg + "px", 
                        minWidth: minWidth + "px",
                        minHeight: minHeight + "px",
                        }} key={index}/>)}
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