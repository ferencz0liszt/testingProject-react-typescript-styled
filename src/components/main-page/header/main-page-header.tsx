import './main-page-header.scss';
import { Component } from "react";
import styled from "styled-components";

import Img from '../../../icons/tiny-coffee-beans-white.svg';

interface MainPageHeaderProps {

}
interface MainPageHeaderState {

}

const Header = styled.div`
  position: absolute;
  padding: 30px 0 0 150px;
  width: 100%;
  height: 70px;
  a {
    color: white;
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
      position: relative;
      color: white;
      width: 35px;
      height: 35px;
      left: -30px;
      top: 15px;
      z-index: 1000;
    }
  }
`;

class MainPageHeader extends Component<MainPageHeaderProps, MainPageHeaderState> {

    render() {
        return(
            <>
                <header>
                    <Header>
                        <a href="../../../../public/index.html">Coffee house</a>
                        <a href="../../../../public/index.html">Our coffee</a>
                        <a href="../../../../public/index.html">For your pleasure</a>
                    </Header>
                </header>
            </>
        )
    }
}

export default MainPageHeader;