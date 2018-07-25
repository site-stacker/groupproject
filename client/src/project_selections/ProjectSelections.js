import React, { Component } from 'react';
import TitleSelector from './TitleSelector';
import ColorPicker from './ColorSelector';
import FontPicker from './FontSelector';
import { connect } from 'react-redux';

class ProjectSelections extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titleShow: true,
            colorShow: false,
            fontShow: false,
            title: '',
            color: '',
            font: ''
        }
        this.goToTitle = this.goToTitle.bind(this);
        this.goToColor = this.goToColor.bind(this);
        this.goToFont = this.goToFont.bind(this);
    }

    goToTitle = () => {
        this.setState({
            titleShow: true,
            colorShow: false,
            fontShow: false
        })
    }

    goToColor = () => {
        this.setState({
            titleShow: false,
            colorShow: true,
            fontShow: false
        })
    }

    goToFont = () => {
        this.setState({
            titleShow: false,
            colorShow: false,
            fontShow: true
        })
    }

    setTitle = (title) => {
        this.setState({
            title: title
        })
    }

    setColor = (color) => {
        this.setState({
            color: color
        })
    }

    setFont = (font) => {
        this.setState({
            font: font
        })
    }

    render() {
        return (
            <div>
                { this.state.titleShow ? <TitleSelector goToColor={this.goToColor} setTitle={this.setTitle} title={this.state.title}/> : this.state.colorShow ? <ColorPicker goToFont={this.goToFont} goToTitle={this.goToTitle}/> : this.state.fontShow ? <FontPicker goToColor={this.goToColor}/> : '' }
            </div> 
        )
    }
}

export default ProjectSelections