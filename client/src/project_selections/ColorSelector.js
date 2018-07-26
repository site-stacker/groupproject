import React, {Component} from 'react';
import { connect } from 'react-redux';
import ColorSelector from '../sidebar/Design/ColorSelector';
import styled from 'styled-components';
import { getColorThemes } from '../redux/reducer';

class ColorPicker extends Component {
    
    componentDidMount() {
        this.props.getColorThemes()
    }

    render() {
        return (
            <Color>
                <h1>Pick a Color Palette for Your Project</h1>
                    <ColorSelector />
                <button onClick={() => this.props.goToTitle()}>Back</button>
                <button onClick={() => this.props.goToFont()}>Continue</button>
            </Color>
        )
    }
}

export default connect(null, {getColorThemes})(ColorPicker)

const Color = styled.div`
    width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 200px;
    color: #5D38DB;
`