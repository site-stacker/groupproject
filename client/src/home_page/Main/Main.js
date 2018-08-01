import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {lightGrey} from '../../sidebar/shared/colors';

class Main extends Component {

    render() {
        return (
            <MainDiv>
                <H1>The Easiest Solution to<br />Creating Your Website</H1>
                <Link to='/selections'>
                    <FreeButton>
                        Start Here for Free
                    </FreeButton>
                </Link>
            </MainDiv>
        )
    }
}

export default Main;

const H1 = styled.h1`
    color: white;
    font-size: 60px;
    text-align: center;
    margin: 20px;
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #5D38DB;
    width: 100%;
    height: 400px;
    box-shadow: 5px 5px 10px ${lightGrey};
`

const FreeButton = styled.button`
    background-color: white;
    width: 280px;
    font-size: 25px;
    margin: 20px;
    padding: 10px 0;
    border: 3px ${lightGrey} solid;
    color: #5D38DB;
    border-radius: 5px;
    transition: .5s;
    cursor: pointer;

    :hover{
        width: 350px;
        transition: .5s;
        }
`