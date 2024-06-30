import React from "react"; 

interface CarouselDotsProps {
    currentIndex: number;
    totalItems: number;
    setImageByIndex: (index: number) => void;
}

function CarouselDots ({currentIndex, totalItems, setImageByIndex}: CarouselDotsProps) {
    const dots = [];

    for (let i = 0; i < totalItems; i++) {
        const dotClass = i === currentIndex ? "dot active" : "dot";
        dots.push(
            <span onClick={() => setImageByIndex(i)} key={i} className={dotClass}></span>
        );
    }

    return <div className="carousel-dots">{dots}</div>;
};

export default CarouselDots;