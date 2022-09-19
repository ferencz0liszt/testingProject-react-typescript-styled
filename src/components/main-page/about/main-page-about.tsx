import './main-page-about.scss'
import { Component } from "react";
import styled from "styled-components";

import BeansImg from "../../../icons/tiny-coffee-beans.svg";
import AboutImg from "../../../img/main-page/about.png";

interface MainPageAboutProps {

}
interface MainPageAboutState {

}

const About = styled.div`
    padding-top: 70px;
    padding-bottom: 60px;
    height: auto;
    background-color: white;
    display: flex;
    justify-content: center;
    img.about-image {
      height: 355px;
      width: 272px;
      filter: drop-shadow(5px 5px 30px rgba(0, 0, 0, 0.25));
    }
    .about-container {
        width: 340px;
        height: 346px;
        margin-left: 79px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            margin: 0;
            font-weight: 400;
            font-size: 24px;
            line-height: 35px;
            color: #000000;
        }
        img {
            height: 28px;
            width: 28px;
            margin-top: 10px;
        }
        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: #000000;
        }
    }
`;

const Underline = styled.div`
    height: 60px;
    background-color: white;
    div {
      height: 1px;
      width: 240px;
      display: block;
      margin: 0 auto;
      background-color: black;
    }
`;

class MainPageAbout extends Component<MainPageAboutProps, MainPageAboutState> {


    render() {
        return(
            <>
                <About>
                    <img className="about-image" src={AboutImg} alt="girl with coffee"/>
                    <div className="about-container">
                        <h2>About our beans</h2>
                        <img src={BeansImg} alt="coffee beans"/>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/>
                            <br/>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.<br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                            is song that held help face.</p>
                    </div>
                </About>
                <Underline>
                    <div></div>
                </Underline>
            </>
        )
    }
}

export default MainPageAbout;