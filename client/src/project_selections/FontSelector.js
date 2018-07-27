import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontSelector from '../sidebar/Design/FontSelector';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class FontPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            project_id: 0
        }
    }

    freeStart = () => {
        axios.post('/api/createDefaultProject', { color_id: this.props.color_id, font: this.props.font, title: this.props.title }).then(res => {
            this.setState({
                project_id: +res.data[0].project_id
            })
            axios.post(`/api/createDefaultHeader/${res.data[0].project_id}`).then(res => {
                axios.post(`/api/createAbout/${this.state.project_id}`).then(res => {
                    axios.post(`/api/createFeature/${this.state.project_id}`).then(res => {
                        this.setState({
                            redirect: true
                        })
                    })
                })
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/edit/${this.state.project_id}`} />
        }
        return (
            <Center>
                <Font>
                    <h1>Pick a Font for Your Project</h1>
                    <FontSelector />
                    <div>
                        <Arrow className='pe-7s-left-arrow' onClick={() => this.props.goToColor()}>
                        </Arrow>
                        <Arrow className='pe-7s-check' onClick={() => this.freeStart()}>
                        </Arrow>
                    </div>
                </Font>
            </Center>
        )
    }
}

function mapStateToProps(state) {
    return {
        color_id: state.currentProject.color_id,
        font: state.currentProject.font
    }
}

export default connect(mapStateToProps)(FontPicker);

const Font = styled.div`
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