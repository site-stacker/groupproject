import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterDiv>
            <TitleHolder>
                <img src='http://lees.fe.uni-lj.si/uploads/default-logo.png' alt='' width='50px'/>
                <h1>SKIZZL</h1>
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
    margin: 0 auto;
    color: #5D38DB;
`

const TitleHolder = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: center;
`

const FooterOptions = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: space-around;
`