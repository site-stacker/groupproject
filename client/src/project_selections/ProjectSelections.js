import React, { Component } from 'react';
import TitleSelector from './TitleSelector';
import ColorPicker from './ColorSelector';
import FontPicker from './FontSelector';
import { connect } from 'react-redux';
import { getFontsList } from '../redux/reducer';
import { getColorThemes } from '../redux/reducer';

class ProjectSelections extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titleShow: true,
            colorShow: false,
            fontShow: false,
            title: ''
        }
        this.goToTitle = this.goToTitle.bind(this);
        this.goToColor = this.goToColor.bind(this);
        this.goToFont = this.goToFont.bind(this);
    }

    componentDidMount() {
        this.props.getColorThemes();
        this.props.getFontsList();
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

    render() {
        return (
            <div>
                { this.state.titleShow ? <TitleSelector goToColor={this.goToColor} setTitle={this.setTitle} title={this.state.title}/> : this.state.colorShow ? <ColorPicker goToFont={this.goToFont} goToTitle={this.goToTitle}/> : this.state.fontShow ? <FontPicker goToColor={this.goToColor} title={this.state.title}/> : '' }
            </div> 
        )
    }
}

export default connect(null, {getFontsList, getColorThemes})(ProjectSelections);