import React from 'react';
import styled from 'styled-components';
import {lightGrey} from '../../sidebar/shared/colors';


function ExampleHolder() {
    return (
        <ExampleSiteHolder>
            <h2>Example Site</h2>
            <img src='https://firebasestorage.googleapis.com/v0/b/skizzl-67005.appspot.com/o/main_images%2FExampleSite3.png?alt=media&token=0969dc64-5be9-4973-bdc6-da4b98e9284c' alt='' width='900px'/>
        </ExampleSiteHolder>
    )
}

export default ExampleHolder;

const ExampleSiteHolder = styled.div`
    height: 509px;
    width: 900px;
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #5D38DB;
    border-radius: 5px;
    box-shadow: 0px 2px 4px ${lightGrey};
    transition: .3s;

    :hover{
        box-shadow: 0px 10px 25px #E1E1E1;
    }
`
