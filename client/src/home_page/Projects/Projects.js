import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getProject } from '../../redux/reducer';

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
            console.log(project.project_id)
            console.log(this.props.user_id)
            return (
                <Link to={`/edit/${project.project_id}`} >
                    <ProjectHolder onClick={() => this.props.getProject(this.props.user_id, project.project_id)}>
                        {project.title}
                    </ProjectHolder>
                </Link >
            )
        })
        return (
            <FlexHolder>
                {(this.state.projects.length !== 0) ? mapped : 
                    <ProjectHolder>
                        <H2>You have not started any projects yet. Click above to get started!</H2>
                    </ProjectHolder>
                }
            </FlexHolder>
        )
    }
}

const FlexHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 930px;
    margin: 0 auto;
    justify-content: space-around;
`

const ProjectHolder = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #5D38DB;
    border-radius: 5px;
    color: #5D38DB;
    display: flex;
    justify-content: center;
    align-items: center;
`

const H2 = styled.h2`
    text-align: center;
`

function mapStateToProps(state) {
    console.log(state.user)
    return {
        user_id: state.user
    }
}

export default connect(mapStateToProps, {getProject})(Projects)