import React, { Component } from 'react'
import {storage} from "./../../../firebase/index"
import {updateHeaderBg} from "./../../../redux/reducer"
import {connect} from "react-redux"
import styled from "styled-components"
import {Btn} from "./../../shared/Button"


class BackgroundUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null,
            url: '',
            progress: 0
        }
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({
                image: image 
            })
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`background_images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})
        }, 
        (error) => {
            // error function
            console.log(error)
        }, 
        () => {
            // complete function
            storage.ref('background_images').child(image.name).getDownloadURL().then(url => {
                this.props.updateHeaderBg(url)
                this.setState({url})
                // AXIOS CALL TO SAVE IMAGE URL IN DB GOES HERE
            }).then(() => this.setState({image: null}))
        });
    }

    render() {
        if(this.state.progress !== 0 && this.state.progress < 100) {
            return (
                <Uploader>
                  
                        <ProgressBar opacity={this.state.progress !== 0 && this.state.progress < 100 ? 1 : 0 } value={this.state.progress} max='100' />
                </Uploader> 
            )
        } else {
            return (
                <Uploader>
                    <Input type='file' onChange={this.handleChange} innerRef={fileInput => this.fileInput = fileInput}/>
                        {!this.state.image
                        ?
                        <Button onClick={() => this.fileInput.click()}>Select Image</Button>
                        :
                        <Button onClick={this.handleUpload}>Upload</Button>}
                        
                </Uploader> 
            )
        }
        
        

    }
}

export default connect(null, {updateHeaderBg})(BackgroundUploader);

const Uploader = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
`;

const ProgressBar = styled.progress`
    width: 100px;
    opacity: ${props => props.opacity};
    transition: 0.2s ease-in;
    position: relative;
`;

const Input = styled.input`
   display: none;
`;

const Button = Btn.extend`
    padding: 15px;
    position: relative;
    bottom: 0;
    left: 0;
    margin: 5px 0; 
    transform: translateX(0);
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`;

