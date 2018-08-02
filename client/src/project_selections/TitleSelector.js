import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ScaleIn } from '../sidebar/shared/animations';

class TitleSelector extends Component {

    componentDidMount() {
        console.log('title mounted')
    }

    handleKeyUp(e){
        console.log(e)
       if(e.keyCode === 13) {
            this.props.goToColor()
       } 
    }

    render() {
        console.log(this.props)
        return (
            <ScaleIn>
                <Center>
                    <Title>
                        <h1>What is the Title of Your Project?</h1>
                        <TitleInput onChange={(e) => this.props.setTitle(e.target.value)} value={this.props.title} onKeyUp={(e) => this.handleKeyUp(e)} />
                        <br />
                        <br />
                        <div>
                            <Link to={this.props.user ? '/projects' : '/'} >
                                <Arrow className='pe-7s-left-arrow' ></Arrow>
                            </Link >
                            <Arrow onClick={() => this.props.goToColor()} className='pe-7s-right-arrow'></Arrow>
                        </div>
                    </Title>
                </Center>
            </ScaleIn>
        )
    }
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
    cursor: pointer;

    :hover{
        font-size: 45px;
        transition: .5s;
        margin: -5px 20px;
    }
`

const TitleInput = styled.input`
    border-bottom: 1px solid #5D38DB;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 250px;
    text-align: center;
    color: #5D38DB;
    font-size: 30px;
    transition: .5s;

    :hover{
        width: 400px;
        transition: .5s;
    }
    :focus{
        width: 400px;
        transition: .5s;
        outline: none;
    }
`