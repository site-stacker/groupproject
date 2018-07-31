import React, { Component } from 'react'
import { getUser } from '../../redux/reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components';

class LoginDuringProject extends Component {
    constructor(props) {
        super(props)
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
                    axios.put(`/api/updateProjectWithUser/${this.props.project_id}`).then(res => {
                        console.log('project updated with user id!')
                        axios.put(`/api/updateHeaderWithUser/${this.props.project_id}`).then(res => {
                            console.log('header updated with user id!')
                            axios.put(`/api/updateAboutWithUser/${this.props.project_id}`).then(res => {
                                console.log('about updated with user id!')
                                this.props.currentProject.feature_components.forEach(feature => {
                                    axios.put(`/api/updateFeatureWithUser/${feature.feature_component_id}`).then(res => {
                                        console.log('feature updated with user id!')
                                    })
                                })
                            })
                        })
                    })
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
                    this.props.getUser(res.data).then(res => {
                        axios.put(`/api/updateProjectWithUser/${this.props.project_id}`).then(res => {
                            console.log('project updated with user id!')
                            axios.put(`/api/updateHeaderWithUser/${this.props.project_id}`).then(res => {
                                console.log('header updated with user id!')
                                axios.put(`/api/updateAboutWithUser/${this.props.project_id}`).then(res => {
                                    console.log('about updated with user id!')
                                    this.props.currentProject.feature_components.forEach(feature => {
                                        axios.put(`/api/updateFeatureWithUser/${feature.feature_component_id}`).then(res => {
                                            console.log('feature updated with user id!')
                                        })
                                    })
                                })
                            })
                        })
                    })
                    this.setState({ error: 'You have registered' })
                    alert(`You are now registered ${res.data.username}`)
                } else {
                    this.setState({ loggedIn: true })
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    render() {
        return (
            <div className='login-component'>
                <h3 style={{textAlign: 'center'}}>Username</h3>
                <Username
                    type='text'
                    onChange={e => this.setState({ username: e.target.value })}
                    className='username-input'
                />
                <h3 style={{textAlign: 'center'}}>Password</h3>
                <Password
                    type='text'
                    onChange={e => this.setState({ password: e.target.value })}
                    className='password-input'
                />
                <br /><br />
                <LoginRegister type='submit' onClick={() => this.login()} className='login-btn'>Login</LoginRegister>
                <LoginRegister type='submit' onClick={() => this.register()} className='register-btn'>
                    Register</LoginRegister>
                <p>{this.state.error}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        project_id: state.currentProject.project_id,
        currentProject: state.currentProject
    }
}

export default connect(mapStateToProps, { getUser })(LoginDuringProject)

const Username = styled.input`
    border-bottom: 1px solid #5D38DB;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 125px;
    color: #5D38DB;
    font-size: 15px;
    transition: .5s;
    background: none;
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
    background: none;
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
    display: ${props => props.user ? 'none' : 'initial'};
    border: 2px solid #5D38DB;
    border-radius: 5px;
    color: #5D38DB;
    background-color: whitesmoke;
`

const Logout = styled.button`
    display: ${props => props.user ? 'initial' : 'none'};
    border: 2px solid #5D38DB;
    border-radius: 5px;
    color: #5D38DB;
    background-color: whitesmoke;
    `