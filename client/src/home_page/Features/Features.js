import React from 'react';
import styled from 'styled-components';

function Features() {
    return (
        <FeaturesHolder>
            <Feature>

            </Feature>
            <Feature1>

            </Feature1>
            <Feature>

            </Feature>
        </FeaturesHolder>
    )
}

export default Features;

const FeaturesHolder = styled.div`
    width: 750px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
`

const Feature1 = styled.div`
    height: 350px;
    width: 350px;
    border: 1px solid #5D38DB;
    border-radius: 5px;
    align-self: flex-end;
`

const Feature = styled.div`
    height: 350px;
    width: 350px;
    border: 1px solid #5D38DB;
    border-radius: 5px;
`

