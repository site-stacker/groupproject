import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontSelector from '../sidebar/Design/FontSelector';
import styled from 'styled-components';
import { getFontsList } from '../redux/reducer';

class FontPicker extends Component {

    componentDidMount() {
        this.props.getFontsList()
    }

    render() {
        return (
            <Font>
                <h1>Pick a Font for Your Project</h1>
                <FontSelector />
                <button onClick={() => this.props.goToColor()}>Back</button>
                <button>Begin Creating</button>
            </Font>
        )
    }
}

export default connect(null, { getFontsList })(FontPicker);

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