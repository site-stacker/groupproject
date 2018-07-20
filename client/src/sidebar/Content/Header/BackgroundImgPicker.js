import React, {Component} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import {darkwhite} from "./../../shared/colors"
import { Input } from "./../../shared/Input"
import axios from "axios"
import {updateHeaderBg} from "./../../../redux/reducer"
// require("dotenv").config()

class BackgroundPicker extends Component{
  constructor(){
    super()
    
    this.state={
      theme: "",
      imgs_list:[]

    }
  }

  componentDidMount(){
    this.getImg()
  }

  getKeySearch = (event) => {
    console.log(event)
    if (event === "Enter" && this.state.theme !== "") {
      this.getImg()
    }
  }
  
  getImg = () => {
    if(this.state.theme){
      axios.get(`https://api.unsplash.com/search/photos/?query=${this.state.theme}&client_id=${process.env.REACT_APP_UNSPLASH_ID}`).then((res)=>{
      console.log(res.data.results)
      this.setState({imgs_list: res.data.results})
    })
    } else{
    console.log("no theme")
    axios.get(`https://api.unsplash.com/photos/?query=${this.state.theme}&client_id=${process.env.REACT_APP_UNSPLASH_ID}`).then((res)=>{
      this.setState({imgs_list: res.data})
    })
    }
  }
  render(){
    const {imgs_list, theme} = this.state
    console.log(imgs_list)
    const mappedImg = imgs_list.length !== 0 ?
    imgs_list.map((img, i) => {
      return(
        <ImgContainer key={i} onClick={() => this.props.updateHeaderBg(img.urls.full)}>
          <Img src={img.urls.full} />
        </ImgContainer>
      )
    }) 
    : 
    null;

    return(
      <Bg>
        <Input onChange={(e)=>this.setState({theme: e.target.value})} onKeyDown={ e => this.getKeySearch(e.key)} value={theme}/>
        <ImgsGrid>
        {mappedImg}
        </ImgsGrid>
      </Bg>
    )
  }
}
const mapStateToProps = (state) => {
  return{

  }
}
export default connect(mapStateToProps, {updateHeaderBg})(BackgroundPicker)

const Bg = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background: ${darkwhite};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const ImgsGrid = styled.div`
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: minmax(120px, auto);
    grid-auto-flow: dense;
  grid-column-gap: 10px;
  grid-row-gap: 10px; */
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around
`;

const ImgContainer = styled.div`
  width: 45%;
  margin: 0 0 15px;
  height: 120px;
  overflow: hidden;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
`;