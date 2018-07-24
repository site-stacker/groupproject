import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header(props) {
    return (
        <HeaderDiv>
            <Link to={props.user ? '/projects' : '/'} >
                <TitleHolder>
                    <img src='http://lees.fe.uni-lj.si/uploads/default-logo.png' alt='' width='50px' />
                    <h2>SKIZZL</h2>
                </TitleHolder>
            </Link >
            <div>
                <h3>Account</h3>
            </div>
        </HeaderDiv>
    )
}

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
    text-decoration-line: none;
`

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);