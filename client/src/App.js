import React, { Component } from 'react';
import LandingPage from "./landing_page/LandingPage"
import Sidebar from './sidebar/index';
import EditIcon from "./sidebar/EditIcon/index"
import { getProject } from './redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      project_id: ''
    }
    this.autosaver = this.autosaver.bind(this)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.project_id).then(res => {
      setInterval(this.autosaver, 20000);
    })
  }
  
  autosaver() {
    axios.put(`/api/updateProject/${this.props.match.params.project_id}`, this.props.currentProject).then(res => {
      console.log(res.data)
      axios.put(`/api/updateHeader/${this.props.match.params.project_id}`, this.props.currentProject)
    })
  }

  render() {
    return (
      <div>
        <Sidebar />
        <EditIcon />
        <LandingPage />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentProject: state.currentProject
  }
}

export default connect(mapStateToProps, {getProject})(App);
