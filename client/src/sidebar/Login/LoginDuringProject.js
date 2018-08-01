import React, { Component } from 'react'
import { getUser } from '../../redux/reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components';
import { violet, darkwhite } from '../shared/colors';
import { toggleLoginOff } from '../../redux/reducer';

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
                    this.props.toggleLoginOff()
                } else {
                    this.setState({ loggedIn: false, error: 'Login failed' })
                }
            })
        } else {
            this.setState({ error: 'Please fill in both input fields' })
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
                    this.props.toggleLoginOff()
                    alert(`You are now registered ${res.data.username}`)
                } else {
                    this.setState({ loggedIn: false, error: 'Login failed' })
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    pressEnter(e) {
        if(e.keyCode === 13) {
            this.login()
        }
    }
    render() {
        return (
            <TopDiv>
                <h3 style={{ textAlign: 'center' }}>Username</h3>
                <Username
                    type='text'
                    onChange={e => this.setState({ username: e.target.value })}
                    className='username-input'
                />
                <h3 style={{ textAlign: 'center' }}>Password</h3>
                <Password
                    type='password'
                    onChange={e => this.setState({ password: e.target.value })}
                    className='password-input'
                    onKeyUp={e => this.pressEnter(e)}
                />
                <br /><br />
                <ButtonHolder>
                    <Btn type='submit' onClick={() => this.login()} className='login-btn'>Login</Btn>
                    <Btn type='submit' onClick={() => this.register()} className='register-btn'>Register</Btn>
                </ButtonHolder>
                <p>{this.state.error}</p>
            </TopDiv>
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

export default connect(mapStateToProps, { getUser, toggleLoginOff })(LoginDuringProject)

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

const Btn = styled.button`
  background: ${violet};
  color: ${darkwhite};
  padding: 20px;
  position: relative;
  border: 1px solid ${violet};
  border-radius: 6px;
  display: flex;
  flex-flow: row;
  cursor: pointer;
  transition: .3s;
  
  :hover{
      background: ${darkwhite};
      color: ${violet};
      border: 1px solid ${violet};
  }

  &:focus{
    outline: none;
  }
`

const ButtonHolder = styled.div`
    display: flex;
    justify-content: space-around;
    width: 175px;
`

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`