// Holds example site that can be edited by the user

import React from 'react';
import styled from 'styled-components';

function ExampleHolder() {
    return (
        <ExampleSiteHolder>
            <h1>Example Holder</h1>
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