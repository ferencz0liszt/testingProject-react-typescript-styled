import React from 'react';
import './main-page.scss';

import MainPageHeader from "./components/main-page/header/main-page-header";
import MainPagePromo from "./components/main-page/promo/main-page-promo";
import MainPageAbout from "./components/main-page/about/main-page-about";
import MainPageFooter from "./components/main-page/footer/main-page-footer";
import MainPageCoffee from "./components/main-page/coffee/main-page-coffee";

const data = [
    {label: 'Arabica 1kg.', origin: 'Brazil', price: 6.99, img: '../../img/main-page/coffee-1.png'},
    {label: 'Robusta 1kg.', origin: 'Kongo', price: 6.99, img: '../../img/main-page/coffee-1.png'},
    {label: 'Americano 1kg.', origin: 'Kenya', price: 6.99, img: '../../img/main-page/coffee-1.png'},
    {label: 'Espresso 1kg.', origin: 'Brazil', price: 6.99, img: '../../img/main-page/coffee-1.png'},
    {label: 'Latte 1kg.', origin: 'Brazil', price: 6.99, img: '../../img/main-page/coffee-1.png'},
    {label: 'Mixed 1kg.', origin: 'Brazil', price: 6.99, img: '../../img/main-page/coffee-1.png'},
];




function MainPage() {
  return (
    <>
        <MainPageHeader/>
        <MainPagePromo/>
        <MainPageAbout/>

        <MainPageCoffee/>

        <MainPageFooter/>

    </>
  );
}

export default MainPage;
