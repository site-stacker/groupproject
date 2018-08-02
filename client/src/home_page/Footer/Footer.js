import React from 'react';
import styled from 'styled-components';
import logo from "./../../assets/logo.svg";


function Footer() {
    return (
        <FooterDiv>
            <TitleHolder>
                <img src={logo} alt='Skizzl logo' width='120px'/>
            </TitleHolder>
            <FooterOptions>
                <h3>Terms</h3>
                <h3>Privacy</h3>
                <h3>Contact</h3>
            </FooterOptions>
        </FooterDiv>
    )
}

export default Footer;

const FooterDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px auto 0;
    color: #5D38DB;
`

const TitleHolder = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: center;
    margin-bottom: 20px;
`

const FooterOptions = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: space-around;
    margin-bottom: 40px;
`