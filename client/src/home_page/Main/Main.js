import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            project: 0
        }
    }

    freeStart = () => {
        axios.post('/api/createDefaultProject').then(res => {
            console.log(res.data[0].project_id)
            this.setState({
                project: +res.data[0].project_id
            });
            axios.post(`/api/createDefaultHeader/${res.data[0].project_id}`).then(res => {
                this.setState({
                    redirect: true
                })
            })
        })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={`/edit/${this.state.project}`} />
        }
        return (
            <MainDiv>
                <H1>The Easiest Solution to<br />Creating Your Website</H1>
                {/* <Link to='/edit/1'> */}
                    <FreeButton onClick={() => this.freeStart()}>
                        Start Here for Free
                    </FreeButton>
                {/* </Link> */}
            </MainDiv>
        )
    }
}

export default Main;

const H1 = styled.h1`
    color: white;
    font-size: 60px;
    text-align: center;
    margin: 20px;
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    background-color: #5D38DB;
    width: 750px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px whitesmoke;
`

const FreeButton = styled.button`
    background-color: white;
    font-size: 25px;
    margin: 20px;
    border: 3px whitesmoke solid;
    color: #5D38DB;
    border-radius: 5px;
`