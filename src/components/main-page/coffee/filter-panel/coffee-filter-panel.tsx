import './coffee-filter-panel.scss';
import { Component } from "react";
import styled from "styled-components";


interface MainPageCoffeeProps {

}
interface MainPageCoffeeState {

}

const buttonsData = [
    'Brazil',
    'Kenya',
    'Columbia',
];

const buttons = buttonsData.map((item) => {
    return(
        <button name={item} id={item}>{item}</button>
    )
})

const Filter = styled.div`
    margin-left: 83px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    button {
        width: 75px;
        height: 30px;
        background: #FFFFFF;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        border: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        text-align: center;
        color: #000000;
        margin-left: 5px;
        :first-child {
            margin-left: 35px;
        }
    }
`;


class CoffeeFilterPanel extends Component<MainPageCoffeeProps, MainPageCoffeeState> {


    render() {
        return(
            <>
                <Filter>
                    Or filter
                    {buttons}
                </Filter>
            </>
        )
    }
}

export default CoffeeFilterPanel;