import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TitleSelector(props) {
    return (
        <Title>
            <h1>What is the Title of Your Project?</h1>
            <input onChange={(e) => props.setTitle(e.target.value)} value={props.title}/>
            <Link to={props.user ? '/projects' : '/'} >
            <button>Back</button>
            </Link >
            <button onClick={() => props.goToColor()}>Continue</button>
        </Title> 
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TitleSelector);

const Title = styled.div`
    width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 200px;
    color: #5D38DB;
`