import React, { Component } from 'react';
import {storage} from "./../../firebase/index"
import {updateHeaderImage} from "./../../redux/reducer"
import {connect} from "react-redux"


class ImageUploader extends Component {
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
        const uploadTask = storage.ref(`main_images/${image.name}`).put(image);
        // this.props.updateHeaderImage(image)
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
            storage.ref('main_images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.props.updateHeaderImage(url)
                this.setState({url})
                // AXIOS CALL TO SAVE IMAGE URL IN DB GOES HERE
            })
        });
    }

    render() {
        const style = {
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            <div style={style}>
                <progress value={this.state.progress} max='100' />
                <br />
                <input type='file' onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
            </div> 
        )
    }
}

export default connect(null, {updateHeaderImage})(ImageUploader);