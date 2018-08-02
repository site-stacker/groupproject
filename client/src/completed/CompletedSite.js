import React, { Component } from 'react';
import {connect} from "react-redux";
import { getProject, getFeatures } from '../redux/reducer';
import LandingPage from '../landing_page/LandingPage';

class CompletedSite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'none'
        }
    }

    componentDidMount() {
        this.props.getProject(this.props.match.params.project_id).then(res => {
          this.props.getFeatures(this.props.match.params.project_id).then(res => {
            this.setState({
                display: 'initial'
            })
          })
        })
      }

    render() {
        return (
            <div style={{display: this.state.display}}>
                <LandingPage />
            </div> 
        )
    }
}

export default connect(null, {getProject, getFeatures})(CompletedSite);