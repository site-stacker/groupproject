import React, { Component } from 'react'
import { getUser } from '../../redux/reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            error: '',
            loggedIn: false,
        }
    }
    login() {
        const { username, password } = this.state
        if (username && password) {
            axios.post('/api/login', { username: username.toLowerCase(), password: password }).then(res => {
                console.log(res.data)
                if (res.data.length !== 0) {
                    this.props.getUser(res.data)
                    //   this.setState({error: res.data})
                    this.setState({ loggedIn: true })
                } else {
                    this.setState({ loggedIn: true, error: '' })
                }
            })
        } else {
            this.setState({ err: 'Please fill in both input fields' })
        }
    }
    register() {
        const { username, password } = this.state
        if (username && password) {
            axios.post('/api/createUser', { username: username.toLocaleLowerCase(), password: password }).then(res => {
                if (res.data.length !== 0) {
                    this.props.getUser(res.data)
                    this.setState({ error: 'You have registered' })
                } else {
                    this.setState({ loggedIn: true })
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    logout() {
        // const {username, password} = this.state
        axios.post('/api/logout').then(res => {
            if (res) {
                this.setState({ loggedIn: false })
            }
        })
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to={'/projects'} />
        }
        return (
            <div className='login-component'>
                <h3 style={{ textAlign: 'center' }}>Username</h3>
                <Username
                    type='text'
                    onChange={e => this.setState({ username: e.target.value })}
                />
                <h3 style={{ textAlign: 'center' }}>Password</h3>
                <Password
                    type='password'
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <br /><br />
                {
                    this.props.user ?
                        <ButtonHolder>
                            <Link to='/'>
                                <Logout type='submit' onClick={() => this.logout()} className='logout-btn'>
                                    Logout
                    </Logout>
                            </Link>
                        </ButtonHolder>
                        :
                        <ButtonHolder>
                            <LoginRegister type='submit' onClick={() => this.login()} className='login-btn'>Login</LoginRegister>
                            <LoginRegister type='submit' onClick={() => this.register()} className='register-btn'>Register</LoginRegister>
                        </ButtonHolder>
                }
                <p>{this.state.error}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.user)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser })(Login)

const Username = styled.input`
    border-bottom: 1px solid #5D38DB;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 125px;
    color: #5D38DB;
    font-size: 15px;
    transition: .5s;
    justify-content: center;
    text-align: center;

    :hover{
        width: 150px;
        transition: .5s;
    }
    :focus{
        width: 150px;
        transition: .5s;
        outline: none;
    }
`

const Password = styled.input`
    border-bottom: 1px solid #5D38DB;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 125px;
    color: #5D38DB;
    font-size: 15px;
    transition: .5s;
    justify-content: center;
    text-align: center;

    :hover{
        width: 150px;
        transition: .5s;
    }
    :focus{
        width: 150px;
        transition: .5s;
        outline: none;
    }
`

const LoginRegister = styled.button`
    /* display: ${props => isNaN(props.user) ? 'initial' : 'none'}; */
    border: 2px solid #5D38DB;
    border-radius: 5px;
    color: #5D38DB;
    background-color: whitesmoke;
`

const Logout = styled.button`
    /* display: ${props => isNaN(props.user) ? 'none' : 'initial'}; */
    border: 2px solid #5D38DB;
    border-radius: 5px;
    color: #5D38DB;
    background-color: whitesmoke;
    `

const ButtonHolder = styled.div`
    display: flex;
    justify-content: space-around;
`