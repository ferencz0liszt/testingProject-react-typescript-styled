import './main-page-footer.scss'
import { Component } from "react";
import styled from "styled-components";

import Img from '../../../icons/tiny-coffee-beans.svg';

interface MainPageFooterProps {

}
interface MainPageFooterState {

}

const Footer = styled.footer`
  margin-top: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 70px;
  a {
    position: relative;
    color: black;
    margin-right: 40px;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;

    :last-child {
      margin-right: 0;
    }

    :first-child::before {
      content: url(${Img});
      display: block;
      position: absolute;
      width: 35px;
      height: 35px;
      left: -30px;
      top: -24px;
      z-index: 10000;
    }
  }
`;

class MainPageFooter extends Component<MainPageFooterProps, MainPageFooterState> {


    render() {
        return(
            <>
                <Footer>
                    <a href="../../../../public/index.html">Coffee house</a>
                    <a href="../../../../public/index.html">Our coffee</a>
                    <a href="../../../../public/index.html">For your pleasure</a>
                </Footer>
            </>
        )
    }
}

export default MainPageFooter;