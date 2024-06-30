import React, { useState, useEffect } from "react";
import "./Carousel.css";
import CarouselDots from "./CarouselDots";

interface CarouselProps{
    minWidth: number,
    minHeight: number,
    images: string[],
    dots: boolean,
    autoScroll: boolean,
}

function Carousel({minWidth, minHeight, images, dots = true, autoScroll = true}: CarouselProps) {
    const [navigateImg, setNavigateImg] = useState(0);

    function onClickLeft() {
        setNavigateImg((navigateImg - 1 + images.length) % images.length);
    }

    function onClickRight() {
        setNavigateImg((navigateImg + 1) % images.length);
    }

    function setImageByIndex(index: number) {
        setNavigateImg(index);
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (autoScroll) {
            interval = setInterval(() => {
                setNavigateImg((navigateImg + 1) % images.length);
            }, 3000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [navigateImg, images.length, autoScroll]);

    return (
        <div className="carousel">
            <div className="line1">
                <p className="left" onClick={onClickLeft}>&lt;</p>
                <div className="divCarousel" style={{ width: minWidth + "px", height: minHeight + "px"}}>
                    {images.map((item, index) => (
                        <img className="imgCarousel" src={images[index]} style={{
                                left: -minWidth * navigateImg + "px", 
                                minWidth: minWidth + "px",
                                minHeight: minHeight + "px",
                            }} key={index} alt={`Carousel image ${index + 1}`}
                        />
                    ))}
                </div>
                <p className="right" onClick={onClickRight}>&gt;</p>
            </div>
            <div className="line2">
                {dots ? ( 
                    <CarouselDots currentIndex={navigateImg} totalItems={images.length} setImageByIndex={setImageByIndex}/>
                ) :
                <></>}
            </div>
        </div>
    );
}

export default Carousel;