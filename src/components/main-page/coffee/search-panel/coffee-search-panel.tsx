import './coffee-search-panel.scss';
import { Component } from "react";
import styled from "styled-components";


interface MainPageCoffeeProps {

}
interface MainPageCoffeeState {

}

const Search = styled.div`
    label {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
      margin-right: 20px;
    }
    input {
      width: 180px;
      height: 30px;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      background: #FFFFFF;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      border: none;
    }
  
    
`;


class CoffeeSearchPanel extends Component<MainPageCoffeeProps, MainPageCoffeeState> {


    render() {
        return(
            <>
                <Search>
                    <label htmlFor="search">Looking for</label>
                    <input
                        name="search"
                        value=""
                        placeholder="start typing here..."
                    />
                </Search>
            </>
        )
    }
}

export default CoffeeSearchPanel;