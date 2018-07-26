// Holds example site that can be edited by the user

import React from 'react';
import styled from 'styled-components';

function ExampleHolder() {
    return (
        <ExampleSiteHolder>
            <img src='https://firebasestorage.googleapis.com/v0/b/skizzl-67005.appspot.com/o/main_images%2FExample%20Site.png?alt=media&token=38b1ba5c-ff0f-448a-9992-b65b3c6fd9f1' alt='' width='900px'/>
        </ExampleSiteHolder>
    )
}

export default ExampleHolder;

const ExampleSiteHolder = styled.div`
    height: 600px;
    width: 900px;
    border: 1px solid #5D38DB;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5D38DB;
    border-radius: 5px;
`