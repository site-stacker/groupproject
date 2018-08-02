import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../sidebar/Login/Login';
import { lightGrey } from '../../sidebar/shared/colors';
import axios from 'axios';
import { logout } from '../../redux/reducer';
import logoWhite from "./../../assets/logo_white.svg";

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

    logout = () => {
        // const {username, password} = this.state
        axios.post('/api/logout').then(res => {
            this.props.logout()
        })
    }

    render() {
        return (
            <HeaderDiv>
                <Link to={this.props.user ? '/projects' : '/'} >
                    <TitleHolder>
                        <img src={logoWhite} alt='' width='120px' />
                    </TitleHolder>
                </Link >
                {
                    this.props.user ?
                        <Link to='/' >
                            <H3 onClick={() => this.logout()}>Logout</H3>
                        </Link>
                        :
                        <div>
                            <H3 onClick={() => this.handleToggle()}>Account</H3>
                            <Modal height={this.state.toggleModal}>
                                <Login />
                            </Modal>
                        </div>
                }
            </HeaderDiv>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logout })(Header);

const HeaderDiv = styled.div`
    z-index: 20;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    color: white;
    & a {text-decoration: none};
`

const TitleHolder = styled.div`
    width: 150px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
`

const H2 = styled.h2`
    text-decoration: inherit;
`

const H3 = styled.h3`
    transition: .5s;
    color: white;
    cursor: pointer;

    :hover{
        font-size: 20px;
        transition: .5s;
    }
`

const Modal = styled.div`
    width: 250px;
    height: ${props => props.height ? '275px' : 0};
    border-radius: 5px;
    color: #5D38DB;
    background-color: white;
    position: absolute;
    right: 30px;
    box-shadow: 2px 2px 10px ${lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.2s ease-in;
`
