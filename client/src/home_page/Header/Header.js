import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <HeaderDiv>
            <TitleHolder>
                <img src='http://lees.fe.uni-lj.si/uploads/default-logo.png' alt='' width='50px'/>
                <h2>SKIZZL</h2>    
            </TitleHolder> 
            <div>
                <h3>Account</h3>
            </div> 
        </HeaderDiv> 
    )
}

export default Header;

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    color: #5D38DB;
`

const TitleHolder = styled.div`
    display: flex;
    align-items: center;
`