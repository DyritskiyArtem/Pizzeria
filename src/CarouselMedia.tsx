import React, {useState, useEffect} from "react";
import Carousel from "./Carousel";

function CarouselMedia() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
    window.addEventListener("resize", function() { setScreenWidth(window.innerWidth) })
    }, []);

    return(
        screenWidth <= 592 ?
            <Carousel minWidth={340} minHeight={200} images={["/imgAboutCompany/baner1.png", "/imgAboutCompany/baner2.png", "/imgAboutCompany/baner3.png"]} dots={false} autoScroll={false} left={true} right={true}/> :
        screenWidth <= 954 ?
            <Carousel minWidth={500} minHeight={273} images={["/imgAboutCompany/baner1.png", "/imgAboutCompany/baner2.png", "/imgAboutCompany/baner3.png"]} dots={false} autoScroll={false} left={true} right={true}/> :
            <Carousel minWidth={852} minHeight={522} images={["/imgAboutCompany/baner1.png", "/imgAboutCompany/baner2.png", "/imgAboutCompany/baner3.png"]} dots={false} autoScroll={false} left={true} right={true}/>        
    )
}

export default CarouselMedia;