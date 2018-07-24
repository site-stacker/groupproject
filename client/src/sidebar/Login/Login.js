import React, {Component} from 'react'
import {getUser} from '../../redux/reducer'
import {connect} from 'react-redux'
import axios from 'axios'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            error: '',
            loggedIn: false,
        }
    }
    login(){
        const {username, password} = this.state
        if(username && password){
            axios.post('/api/login', {username: username.toLowerCase(), password: password}).then(res => {
              console.log(res.data)
              if(res.data.length !== 0){
                  this.props.getUser(res.data)
                //   this.setState({error: res.data})
                  this.setState({loggedIn: true})
              } else {
                  this.setState({loggedIn: true, error: ''})
              }
            })
        } else {
            this.setState({err: 'Please fill in both input fields'})
        }
    }
    register(){
        const {username, password} = this.state
        if(username && password) {
            axios.post('/api/createUser', {username: username.toLocaleLowerCase(), password: password}).then(res => {
                if(res.data.length !==0) {
                   this.setState({error: res.data})
                } else {
                    this.setState({loggedIn: true})
                }
            })
        } else {
            this.setState({error: 'Please fill in both fields'})
        }
    }
    logout(){
        // const {username, password} = this.state
        axios.post('/api/logout').then(res =>{
           if(res){
               this.setState({loggedIn: false})
           }
        })
    }
    render(){
        return(
            <div className='login-component'>
            <h3>Username</h3>
            <input
            type='text'
            onChange={e => this.setState({username: e.target.value})}
            className='username-input'
            />
            <h3>Password</h3>
            <input
            type='text'
            onChange={e => this.setState({password: e.target.value})}
            className='password-input'
            />
            <br/><br/>
            <button type='submit' onClick={() => this.login()} className='login-btn'>Login</button>
            <button type='submit' onClick={() => this.register()} className='register-btn'>Register</button>
            <button type='submit' onClick={() => this.logout()} className='logout-btn'>Logout</button>
            <p>{this.state.error}</p>
            <p>{this.state.loggedIn}</p>
            </div> 
        )
    }
}


export default connect (null, {getUser})(Login)