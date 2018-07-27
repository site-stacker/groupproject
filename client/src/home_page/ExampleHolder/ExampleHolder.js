// Holds example site that can be edited by the user

import React from 'react';
import styled from 'styled-components';

function ExampleHolder() {
    return (
        <ExampleSiteHolder>
            <h2>Example Site</h2>
            <img src='https://firebasestorage.googleapis.com/v0/b/skizzl-67005.appspot.com/o/main_images%2FExampleSite.png?alt=media&token=4c3d17a7-e7a8-442b-bb1a-91e59269300b' alt='' width='900px'/>
        </ExampleSiteHolder>
    )
}

export default ExampleHolder;

const ExampleSiteHolder = styled.div`
    height: 509px;
    width: 900px;
    border: 1px solid #5D38DB;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #5D38DB;
    border-radius: 5px;
`