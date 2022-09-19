import './main-page-promo.scss'
import { Component } from "react";
import styled from "styled-components";
import bg from '../../../img/main-page/promo-bg.png'
import icon from '../../../icons/covered-coffee-beans.svg'

interface MainPagePromoProps {

}
interface MainPagePromoState {

}

const Promo = styled.div`
  box-sizing: border-box;
  height: 640px;
  background: url(${bg}) center center/cover no-repeat;
  padding-top: 180px;

  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #FFFFFF;
    text-align: center;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  div {
    height: 30px;
    width: 30px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    ::before {
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        width: 60px;
        background-color: #fff;
        top: 46%;
        left: -80px;
        z-index: 10000;
    } 
    ::after {
        content: '';
        position: absolute;
        display: block;
        width: 60px;
        height: 1px;
        background-color: #fff;
        top: 46%;
        left: 50px;
        z-index: 10000;
    }
  }
  img {
    height: 30px;
    width: 30px;
    display: block;
    margin: 0 auto;
    position: relative;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #FFFFFF;
    text-align: center;
  }

  button {
    display: block;
    margin: 18px auto 0 auto;
    height: 30px;
    width: 120px;
    border: 1px solid #FFFFFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    background-color: rgba(255, 255, 255, 0);
    color: #FFFFFF;
  }
`;



class MainPagePromo extends Component<MainPagePromoProps, MainPagePromoState> {

    render() {
        return(
            <>
                <Promo>
                    <h1>Everything You Love About Coffee</h1>
                    <div>
                        <img src={icon} alt="coffee beans"/>
                    </div>
                    <h2>We makes every day full of energy and taste<br/>
                        Want to try our beans?</h2>
                    <button>More</button>
                </Promo>
            </>
        )
    }
}

export default MainPagePromo;