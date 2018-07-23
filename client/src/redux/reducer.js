import axios from "axios";

const initialState ={
  header:{
    // background_color: "#313A5A",
    background_combined: false,
    font_color: "#333",
  },
  features:[
    {
      icon: "",
      title: "Feature 1",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
      icon: "",
      title: "Feature 2",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
      icon: "",
      title: "Feature 3",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    }
  ],
  color_themes:[],
  fonts_list:[],
  currentProject:{
      about_heading: "About US",
      about_text: "Sed "
    },
  sections:["About Us", "Features"],
  contentSection: "Sections",
  sectionSelected: "content",
  selectedTheme:["#FFFFFF", "#313A5A", "#1FDB84", "#999999", "#00B9FF"],
  toggleSidebar: true,
  resetPosition: 0
  
}



const GET_FONTS_LIST = "GET_FONTS_LIST";
const GET_PROJECT = "GET_PROJECT";
const GET_COLORS_THEME = "GET_COLORS_THEME";

const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
const CHANGE_SELECTED_SECTION = "CHANGE_SELECTED_SECTION"

const UPDATE_GENERAL_TITLE = "UPDATE_GENERAL_TITLE"
const UPLOAD_GENERAL_LOGO = "UPLOAD_GENERAL_LOGO"

const UPDATE_HEADER_HEADING = "UPDATE_HEADER_HEADING"
const UPDATE_HEADER_SUBHEADING = "UPDATE_HEADER_SUBHEADING"
const UPDATE_HEADER_BUTTON = "UPDATE_HEADER_BUTTON"
const UPDATE_HEADER_IMAGE = "UPDATE_HEADER_IMAGE"
const UPDATE_HEADER_BG = "UPDATE_HEADER_BG"

const UPDATE_ABOUT_HEADING = "UPDATE_ABOUT_HEADING"
const UPDATE_ABOUT_TEXT = "UPDATE_ABOUT_TEXT"

const UPDATE_FEATURES_HEADING = "UPDATE_FEATURES_HEADING"

export default function reducer(state = initialState, action){
  switch(action.type){
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {toggleSidebar: !state.toggleSidebar})
      
    case GET_COLORS_THEME + "_FULFILLED":
      return Object.assign({}, state, {color_themes: action.payload})
    case GET_FONTS_LIST + "_FULFILLED":
      return Object.assign({}, state, {fonts_list: action.payload})
    case GET_PROJECT + "_FULFILLED":
      return Object.assign({}, state, {currentProject: action.payload[0] }) 
    case CHANGE_SELECTED_SECTION:
      return Object.assign({}, state, {sectionSelected: action.payload }) 

    //GENERAL EDITOR  
    case UPDATE_GENERAL_TITLE:
      return Object.assign({}, state, {currentProject: {...state.currentProject, title: action.payload}}) 
    case UPLOAD_GENERAL_LOGO:
      return Object.assign({}, state, {currentProject: {...state.currentProject, logo: action.payload}})   

    //HEADER EDITOR
    case UPDATE_HEADER_HEADING:
      return Object.assign({}, state, {currentProject: {...state.currentProject, heading: action.payload}}) 
    case UPDATE_HEADER_SUBHEADING:
      return Object.assign({}, state, {currentProject: {...state.currentProject, subheading: action.payload}})
    case UPDATE_HEADER_BUTTON:
      return Object.assign({}, state, {currentProject: {...state.currentProject, button_text: action.payload}})
    case UPDATE_HEADER_IMAGE:
      return Object.assign({}, state, {currentProject: {...state.currentProject, main_img: action.payload}}) 
    case UPDATE_HEADER_BG:
      return Object.assign({}, state, {currentProject: {...state.currentProject, background_img: action.payload}}) 

    //ABOUT EDITOR  
    case UPDATE_ABOUT_HEADING:
      return Object.assign({}, state, {currentProject: {...state.currentProject, about_heading: action.payload}})
    case UPDATE_ABOUT_TEXT:
      return Object.assign({}, state, {currentProject: {...state.currentProject, about_text: action.payload}})    
    
    //FEATURES EDITOR  
    case UPDATE_FEATURES_HEADING:
      return Object.assign({}, state, {currentProject: {...state.currentProject, features_heading: action.payload}})
      
      default:
      return state
  }
}

export const getColorThemes = () =>{

  const colors = axios.get("/api/getColors").then(res => res.data)
  
  return{
    type: GET_COLORS_THEME,
    payload: colors
  }
}

export const getFontsList = () =>{
  const list = axios.get("https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyAyR8cCSuls2EHZHPFIUdxzpDZOM8AJ1r8").then(res =>{
      return res.data.items.filter((font, i) => i < 20)
    })
  return{
    type: GET_FONTS_LIST,
    payload: list
  }
}

export const getProject = (user_id, project_id) =>{
  const project = axios.get(`/api/getProject/${user_id}/${project_id}`).then(res => res.data)
  return{
    type: GET_PROJECT,
    payload: project
  }
}

export const changeSelectedSection = (str) => {
  console.log("action.payload")
  return {
    type: CHANGE_SELECTED_SECTION,
    payload: str
  }
}

// GENERAL EDITOR

export const updateGeneralTitle = str => {
  return{
    type: UPDATE_GENERAL_TITLE, 
    payload: str
  }
}

export const uploadGeneralLogo = str => {
  return{
    type: UPLOAD_GENERAL_LOGO, 
    payload: str
  }
}

// HEADER EDITOR

export const updateHeaderHeading = str => {
  
  return{
    type: UPDATE_HEADER_HEADING, 
    payload: str
  }
}

export const updateHeaderSubheading = str => {
  return{
    type: UPDATE_HEADER_SUBHEADING, 
    payload: str
  }
}

export const updateHeaderButton = str => {
  return{
    type: UPDATE_HEADER_BUTTON, 
    payload: str
  }
}

export const updateHeaderImage = str => {
  return{
    type: UPDATE_HEADER_IMAGE, 
    payload: str
  }
}

export const updateHeaderBg = str => {
  return{
    type: UPDATE_HEADER_BG, 
    payload: str
  }
}

// ABOUT EDITOR

export const updateAboutHeading = str => {
  return{
    type: UPDATE_ABOUT_HEADING, 
    payload: str
  }
}

export const updateAboutText = str => {
  return{
    type: UPDATE_ABOUT_TEXT, 
    payload: str
  }
}

// ABOUT EDITOR

export const updateFeaturesHeading = str => {
  return{
    type: UPDATE_FEATURES_HEADING, 
    payload: str
  }
}

export const updateFeaturesText = str => {
  return{
    type: UPDATE_ABOUT_TEXT, 
    payload: str
  }
}

//TOGGLE SIDEBAR
export const toggleSidebar = () => {
  return{
    type: TOGGLE_SIDEBAR,
    payload: true
  }
}