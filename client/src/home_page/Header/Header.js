import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../sidebar/Login/Login';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleModal: false
        }
    }

    handleToggle = () => {
        this.setState({
            toggleModal: !this.state.toggleModal
        })
    }

    render() {
        return (
            <HeaderDiv>
                <Link to={this.props.user ? '/projects' : '/'} >
                    <TitleHolder>
                        <img src='http://lees.fe.uni-lj.si/uploads/default-logo.png' alt='' width='50px' />
                        <H2>SKIZZL</H2>
                    </TitleHolder>
                </Link >
                <div>
                    <h3 onClick={() => this.handleToggle()}>Account</h3>
                    <Modal show={this.state.toggleModal}>
                        <Login/>
                    </Modal>
                </div>
            </HeaderDiv>
        )
    }
}

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    color: #5D38DB;
    & a {text-decoration: none};
`

const TitleHolder = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #5D38DB;
`

const H2 = styled.h2`
    text-decoration: inherit;
`

const Modal = styled.div`
    width: 250px;
    height: 275px;
    border-radius: 5px;
    color: #5D38DB;
    background-color: white;
    border: 1px solid #5D38DB;
    position: absolute;
    right: 50px;
    box-shadow: 2px 2px 5px #5D38DB;
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);