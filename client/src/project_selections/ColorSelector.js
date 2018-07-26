import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorSelector from '../sidebar/Design/ColorSelector';
import styled from 'styled-components';

class ColorPicker extends Component {

    render() {
        return (
            <Center>
                <Color>
                    <h1>Pick a Color Palette for Your Project</h1>
                    <ColorSelector />
                    <div>
                        <Arrow className='pe-7s-left-arrow' onClick={() => this.props.goToTitle()}></Arrow>
                        <Arrow className='pe-7s-right-arrow' onClick={() => this.props.goToFont()}></Arrow>
                    </div>
                </Color>
            </Center>
        )
    }
}

export default connect(null)(ColorPicker)

const Color = styled.div`
    width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 200px;
    color: #5D38DB;
`

const Center = styled.div`
    height: 100vh;
    display: flex;
`

const Arrow = styled.button`
    background: none;
    outline: none;
    border: none;
    color: #5D38DB;
    margin: 0px 20px;
    font-size: 40px;
    transition: .5s;

    :hover{
        font-size: 45px;
        transition: .5s;
        margin: -5px 20px;
    }
`