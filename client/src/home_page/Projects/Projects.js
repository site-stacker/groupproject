import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getProject } from '../../redux/reducer';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            redirect: false,
            unauthorized: false,
            project_id: 0
        }
        this.deleteProject = this.deleteProject.bind(this)
    }

    componentDidMount() {
        axios.get('/api/getProjects').then(res => {
            console.log(res.data)
            if(res.data === 'redirect') {
                this.setState({
                    unauthorized: true
                })
            } else {
                this.setState({
                    projects: res.data
                })
            }
        })
    }

    deleteProject(project_id) {
        axios.delete(`/api/deleteProject/${project_id}`).then(res => {
            this.componentDidMount()
        })
    }

    getProjectRedirect(project_id) {
        this.props.getProject(project_id).then(res => {
            this.setState({
                project_id: project_id,
                redirect: true
            })
        })
    }

    render() {
        if (this.state.unauthorized) {
            return <Redirect to='/' />
        }
        if (this.state.redirect) {
            return <Redirect to={`/edit/${this.state.project_id}`} />
        } 
        
        let mapped = this.state.projects.map(project => {
            console.log(project)
            console.log(this.props.user_id)
            const theme = project.color_palette.match(/[#a-zA-Z0-9]+/g)
            return (
                <ProjectHolder bg_color={theme[2]} outline={theme[3]} key={project.project_id}>
                    <H3 font={project.font} color={theme[1]}>
                        {project.title}
                    </H3>
                    <IconHolder>
                        <Edit className='pe-7s-edit' color={theme[1]} onClick={() => this.getProjectRedirect(project.project_id)}></Edit>
                        <Delete className='pe-7s-trash' color={theme[1]} onClick={() => this.deleteProject(project.project_id)}></Delete>
                    </IconHolder>
                </ProjectHolder>
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
    margin: 100px auto 0;
`

const ProjectHolder = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid ${props => props.outline};
    border-radius: 5px;
    color: #5D38DB;
    background-color: ${props => props.bg_color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
`

const H2 = styled.h2`
    text-align: center;
`

const H3 = styled.h3`
    text-align: center;
    font-family: ${props => props.font};
    color: ${props => props.color};

`

const Delete = styled.button`
    background: none;
    outline: none;
    border: none;
    color: ${props => props.color};
    margin: 0px 20px;
    font-size: 40px;
    transition: .5s;
    text-decoration: none;
    cursor: pointer;

    :hover{
        font-size: 45px;
        transition: .5s;
        margin: -5px 20px;
    }
`
const Edit = styled.button`
    background: none;
    outline: none;
    border: none;
    color: ${props => props.color};
    margin: 0px 20px;
    font-size: 40px;
    transition: .5s;
    text-decoration: none;
    cursor: pointer;

    :hover{
        font-size: 45px;
        transition: .5s;
        margin: -5px 20px;
    }
`

const IconHolder = styled.div`
    display: flex;
`

function mapStateToProps(state) {
    console.log(state.user)
    return {
        user_id: state.user,
        currentProject: state.currentProject
    }
}

export default connect(mapStateToProps, { getProject })(Projects)