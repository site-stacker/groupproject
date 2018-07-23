import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import getProject from '../../redux/reducer';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get('/api/getProjects').then(res => {
            this.setState({
                projects: res.data
            })
        })
    }

    render() {
        let mapped = this.state.projects.map(project => {
            return (
                <Link to={`/edit/${project.project_id}`} >
                    <div onClick={() => this.props.getProject(this.props.user_id, project.project_id)}>
                        {project.title}
                    </div>
                </Link >
            )
        })
        return (
            <div>
                {mapped}
            </div>
        )
    }
}

const ProjectHolder = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #5D38DB;
    color: #5D38DB;
`

function MapStateToProps(state) {
    return {
        user_id: state.user.user_id
    }
}

export default connect(MapStateToProps, {getProject})(Projects)