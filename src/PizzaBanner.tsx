import React, {useState, useEffect} from "react";
import Carousel from "./Carousel";

function PizzaBanner() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
    window.addEventListener("resize", function() { setScreenWidth(window.innerWidth) })
    }, []);

    return(
        screenWidth <= 592 ?
            <Carousel minWidth={340} minHeight={100} images={["/carouselImg/baner1.png", "/carouselImg/baner2.png", "/carouselImg/baner3.png", "/carouselImg/baner4.png"]} dots={true} autoScroll={true} left={false} right={false}/> :
        screenWidth <= 954 ?
            <Carousel minWidth={500} minHeight={273} images={["/carouselImg/baner1.png", "/carouselImg/baner2.png", "/carouselImg/baner3.png", "/carouselImg/baner4.png"]} dots={true} autoScroll={true} left={true} right={true}/> :
            <Carousel minWidth={852} minHeight={273} images={["/carouselImg/baner1.png", "/carouselImg/baner2.png", "/carouselImg/baner3.png", "/carouselImg/baner4.png"]} dots={true} autoScroll={true} left={true} right={true}/>        
    )
}

export default PizzaBanner;