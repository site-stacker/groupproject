import React, { Component } from 'react';
import LandingPage from "./landing_page/LandingPage"
import Sidebar from './sidebar/index';
import EditIcon from "./sidebar/EditIcon/index"
import { getProject, getFeatures } from './redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      project_id: '',
      display: 'none'
    }
    this.autosaver = this.autosaver.bind(this)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.project_id).then(res => {
      this.props.getFeatures(this.props.match.params.project_id).then(res => {
        this.setState({
          display: 'initial'
        });
        console.log(this.props.currentProject)
        setInterval(this.autosaver, 20000);
      })
    })
  }
  
  autosaver() {
    axios.put(`/api/updateProject/${this.props.match.params.project_id}`, this.props.currentProject).then(res => {
      console.log('project updated!')
      axios.put(`/api/updateHeader/${this.props.match.params.project_id}`, this.props.currentProject).then(res => {
        console.log('header updated!')
        axios.put(`/api/updateAbout/${this.props.match.params.project_id}`, this.props.currentProject).then(res => {
          console.log('about updated!')
          this.props.currentProject.feature_components.forEach(feature => {
            axios.put(`/api/updateFeature/${feature.feature_component_id}`, feature).then(res => {
              console.log('features updated!')
            })
          })
        })
      })
    })
  }

  render() {
    return (
      <div style={{display:this.state.display}}>
        <Sidebar />
        <EditIcon />
        <LandingPage />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentProject: state.currentProject
  }
}

export default connect(mapStateToProps, {getProject, getFeatures})(App);
