import './coffee-items-list.scss';
import {Component, Fragment} from "react";
import styled from "styled-components";


interface MainPageCoffeeProps {

}
interface MainPageCoffeeState {

}

const List = styled.ul`
    position: absolute;

`;


class CoffeeItemsList extends Component<MainPageCoffeeProps, MainPageCoffeeState> {


    render() {
        return(
            <Fragment>
                <List>

                </List>
            </Fragment>
        )
    }
}

export default CoffeeItemsList;