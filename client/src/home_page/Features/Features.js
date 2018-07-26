import React from 'react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

function Features() {
    return (
        <FeaturesHolder>
            <Feature>
                <h3>Easy to Use</h3>
                <Icon style={{ fontSize: '60px' }}>
                    thumb_up
                </Icon>
                <h3>No Design Experience Required</h3>
            </Feature>
            <Feature>
                <h3>Add New Sections</h3>
                <Icon style={{ fontSize: '60px' }}>
                    dashboard
                </Icon>
                <h3>Fully Customize the Content</h3>
            </Feature>
            <Feature>
                <h3>Build and Host</h3>
                <Icon style={{ fontSize: '60px' }}>
                    build
                </Icon>
                <h3>No Coding Knowledge Needed</h3>
            </Feature>
        </FeaturesHolder>
    )
}

export default Features;

const FeaturesHolder = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
`

const Feature = styled.div`
    height: 350px;
    width: 350px;
    border: 1px solid #5D38DB;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #5D38DB;
    color: #5D38DB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .2s;

    :hover{
        box-shadow: 4px 4px 5px #5D38DB;
        transition: .2s;
    }
`

