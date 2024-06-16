import React, {useState} from "react";
import "./Carousel.css";

function Carousel() {

    const [navigateImg, setNavigateImg] = useState<number>(0);

    function onClickLeft() {setNavigateImg(navigateImg - 1);}
    function onClickRight() {setNavigateImg(navigateImg + 1);}

    return(
        <div className="carousel">
            <p onClick={onClickLeft}>&lt;</p>
            <div className="divCarousel">
                <img className="imgCarousel" src="/pizza/peperoni.png"/>
                <img className="imgCarousel" src="/pizza/fourCheeses.png"/>
                <img className="imgCarousel" src="/pizza/hawaiian.png"/>
                <img className="imgCarousel" src="/pizza/pepperoni in Hawaii.png"/>
            </div>
            <p onClick={onClickRight}>&gt;</p>
            <p>{navigateImg}</p>
        </div>
    )
}

export default Carousel;