import './main-page-coffee.scss';
import { Component } from "react";
import styled from "styled-components";

import CoffeeSearchPanel from "./search-panel/coffee-search-panel";
import CoffeeFilterPanel from "./filter-panel/coffee-filter-panel";
import CoffeeItemsList from "./items-list/coffee-items-list";


interface MainPageCoffeeProps {

}
interface MainPageCoffeeState {

}

const Panels = styled.div`
    display: flex;
    justify-content: center;
    align-items: self-start;
    
`;


class MainPageCoffee extends Component<MainPageCoffeeProps, MainPageCoffeeState> {


    render() {
        return(
            <>
                <Panels>
                    <CoffeeSearchPanel/>
                    <CoffeeFilterPanel/>
                    <CoffeeItemsList/>
                </Panels>
            </>
        )
    }
}

export default MainPageCoffee;