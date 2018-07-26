import React, {Component} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import {violet, lightGrey} from "./../../shared/colors"
import axios from "axios"
import {updateHeaderBg} from "./../../../redux/reducer"
import BackgroundUploader from "./BackgroundImageUploader";
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
    if (event === "Enter" && this.state.theme !== "") {
      this.getImg()
    }
  }

  imgChoose = str =>{
    this.props.toggle();
    this.props.updateHeaderBg(str);
  }
  
  getImg = () => {
    console.log(this.state)
    if(this.state.theme){
      axios.get(`https://api.unsplash.com/search/photos/?query=${this.state.theme}&client_id=${process.env.REACT_APP_UNSPLASH_ID}`).then((res)=>{
      console.log(res.data.results)
      this.setState({imgs_list: res.data.results})
    })
    } else{
    axios.get(`https://api.unsplash.com/photos/?query=${this.state.theme}&client_id=${process.env.REACT_APP_UNSPLASH_ID}`).then((res)=>{
      this.setState({imgs_list: res.data})
    })
    }
  }
  render(){
    const {imgs_list, theme} = this.state
    const mappedImg = imgs_list.length !== 0 ?
    imgs_list.map((img, i) => {
      return(
        <ImgContainer key={i} onClick={() => this.imgChoose(img.urls.full)}>
          <Img src={img.urls.full} />
        </ImgContainer>
      )
    }) 
    : 
    null;

    return(
      <Bg right={this.props.right}>
        <Close onClick={()=>this.props.toggle()}>Close</Close>
        <BackgroundUploader />
        <Div>
          <Input input={theme} onChange={(e)=>this.setState({theme: e.target.value})} onKeyDown={ (e) => this.getKeySearch(e.key)} value={theme} />
          <Label top={theme ? 0 : "-16px"}>Search image</Label>
          <FocusBorder width={theme ? 0 : "100%"}/>
        </Div>
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
  width: 500px;
  padding: 30px;
  box-sizing: border-box;
  background: white;
  position: absolute;
  top: 40px;
  right: ${props => props.right};
  margin-bottom: 40px;
  z-index: 3;
  transition: 0.4s ease-in;
`;

const ImgsGrid = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImgContainer = styled.div`
  width: 48%;
  margin: 0 0 5px;
  height: 100px;
  overflow: hidden;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover{
  transform: scale(1.2);
  box-shadow: 0 0 6px rgba(0,0,0,0.6);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  position: relative;
  margin: 50px 0;
`;

const Input = styled.input`
  width: 100%;
  border: 0; 
  padding: 4px 20px; 
  box-sizing: border-box;
  border-bottom: 1px solid #ccc; 
  background-color: transparent;

  &:focus{
    outline: none;
  }
  &:focus ~ span{
    width: 100%; 
    transition: 0.4s;
  }
  &:focus ~ label{
    top: -16px; 
    font-size: 12px; 
    color: ${violet}; 
    transition: 0.3s;
  }
`;

const Label = styled.label`
  position: absolute; 
  left: 0; 
  top: ${props => props.top};
  color: ${lightGrey}; 
  transition: 0.3s; 
  z-index: -1; 
  letter-spacing: 0.5px;
`;

const FocusBorder = styled.span`
  position: absolute; 
  bottom: 0; 
  left: 0; 
  width: ${props => props.width}; 
  height: 2px; 
  background-color: ${violet}; 
  transition: 0.4s;
`;

const Close = styled.div`
  position: absolute;
  z-index: 1;
  cursor: pointer;
`;