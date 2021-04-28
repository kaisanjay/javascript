import React from "react";
import BootstrapCarousel from 'react-bootstrap/Carousel';
import "./styles.scss";
import nextIcon from '../../images/Sportstory/next.png'
import { width } from "dom-helpers";

const controlbtns = (type, iconSize) => {
    let iconWidth = iconSize ? `${iconSize}px` : '42px';
    return type === 'prevIcon' ? <img style={{width: iconWidth, height: iconWidth}} className="icons icons--prev" src={nextIcon} alt="prevIcon"/> : <img style={{width: iconWidth, height: iconWidth}} src={nextIcon} className="icons" alt="nextIcon"/>;
}

const Carousel = ({ size, controlBtnWidth, ...props }) => {
    return <BootstrapCarousel prevIcon={controlbtns('prevIcon', controlBtnWidth)} nextIcon={controlbtns('nextIcon', controlBtnWidth)}  className="carousal" { ...props } />
}

const Item = (props) => {
    return <BootstrapCarousel.Item { ...props } />
}

const Caption = (props) => {
    return <BootstrapCarousel.Caption { ...props } />
}

Carousel.Item = Item;
Carousel.Caption = Caption;

export default Carousel;
