import axios from "axios";
import { gzip } from "zlib";

const initialState ={
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
      about_text: "Sed ",
      background_img: ''
    },
  sections:["About Us", "Features"],
  contentSection: "Sections",
  sectionSelected: "content",
  selectedTheme:["#FFFFFF", "#313A5A", "#1FDB84", "#999999", "#00B9FF"],
  toggleSidebar: true,
  resetPosition: 0
  
}


const GET_USER = "GET_USER";

const GET_FONTS_LIST = "GET_FONTS_LIST";
const GET_PROJECT = "GET_PROJECT";
const GET_COLORS_THEME = "GET_COLORS_THEME";
const PICK_COLOR = "PICK_COLOR"
const PICK_FONT = "PICK_FONT"

const TOGGLE_ABOUT = "TOGGLE_ABOUT"

const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
const CHANGE_SELECTED_SECTION = "CHANGE_SELECTED_SECTION"

const UPDATE_GENERAL_TITLE = "UPDATE_GENERAL_TITLE"
const UPLOAD_GENERAL_LOGO = "UPLOAD_GENERAL_LOGO"

const UPDATE_HEADER_HEADING = "UPDATE_HEADER_HEADING"
const UPDATE_HEADER_SUBHEADING = "UPDATE_HEADER_SUBHEADING"
const UPDATE_HEADER_BUTTON = "UPDATE_HEADER_BUTTON"
const UPDATE_HEADER_IMAGE = "UPDATE_HEADER_IMAGE"
const UPDATE_HEADER_BG = "UPDATE_HEADER_BG"
const UPDATE_HEADER_BG_COLOR = "UPDATE_HEADER_BG_COLOR"
const UPDATE_TOGGLE_COMBINATION = "UPDATE_TOGGLE_COMBINATION"
const UPDATE_THEME = "UPDATE_THEME"

const UPDATE_ABOUT_HEADING = "UPDATE_ABOUT_HEADING"
const UPDATE_ABOUT_TEXT = "UPDATE_ABOUT_TEXT"

const UPDATE_FEATURES_HEADING = "UPDATE_FEATURES_HEADING"

export default function reducer(state = initialState, action){
  console.log(action)
  switch(action.type){
    case GET_USER:
      return Object.assign({}, state, {user: action.payload})

    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {toggleSidebar: !state.toggleSidebar})
      
    case GET_COLORS_THEME + "_FULFILLED":
      return Object.assign({}, state, {color_themes: action.payload})
    case GET_FONTS_LIST + "_FULFILLED":
      return Object.assign({}, state, {fonts_list: action.payload})
    case GET_PROJECT + "_FULFILLED":
      console.log(action.payload)
      return Object.assign({}, state, {currentProject: action.payload }) 
    case CHANGE_SELECTED_SECTION:
      return Object.assign({}, state, {sectionSelected: action.payload }) 
      

    //GENERAL EDITOR  
    case UPDATE_GENERAL_TITLE:
      return Object.assign({}, state, {currentProject: {...state.currentProject, title: action.payload}}) 
    case UPLOAD_GENERAL_LOGO:
      return Object.assign({}, state, {currentProject: {...state.currentProject, logo: action.payload}})   
    case PICK_COLOR:
      return Object.assign({}, state, {currentProject: {...state.currentProject, color_id: action.payload.id, color_palette: action.payload.palette}})
    case PICK_FONT:
      return Object.assign({}, state, {currentProject: {...state.currentProject, font: action.payload}})  

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
    case UPDATE_HEADER_BG_COLOR:
      return Object.assign({}, state, {currentProject: {...state.currentProject, background_color: action.payload}})
    case UPDATE_THEME:  
      return Object.assign({}, state, {currentProject: {...state.currentProject, color_palette: action.payload}})

    case UPDATE_TOGGLE_COMBINATION:
      return Object.assign({}, state, {currentProject: {...state.currentProject, picture_and_color: action.payload}})  

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

export function getUser(userData){
  
  return {
    type: GET_USER,
    payload: userData
  }
}


export const getColorThemes = () =>{
  const colors = axios.get("/api/getColors").then(res => res.data)
  return{
    type: GET_COLORS_THEME,
    payload: colors
  }
}

export const pickColor = (id, palette, name) => {
  const theme = palette.match(/[#a-zA-Z0-9]+/g)
  return{
    type: PICK_COLOR,
    payload: {id: id, palette: theme, name: name}
  }
}

export const pickFont = (name) => {
  return{
    type: PICK_FONT,
    payload: name
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

export const getProject = (project_id) =>{
  console.log(project_id)
  const project = axios.get(`/api/getProject/${project_id}`).then(res => { 
    res.data[0].color_palette = res.data[0].color_palette.match(/[#a-zA-Z0-9]+/g) 
  return res.data[0]})
  return{
    type: GET_PROJECT,
    payload: project
  }
}

export const changeSelectedSection = (str) => {
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

export const updateHeaderBackgroundColor = num =>{
  return {
    type: UPDATE_HEADER_BG_COLOR,
    payload: num
  }
}

export const updateToggleCombination = (bool) => {
  return{
    type: UPDATE_TOGGLE_COMBINATION,
    payload: bool
  }
}

export const updateTheme = (arr) => {
  return{
    type: UPDATE_THEME,
    payload: arr
  }
}

// ABOUT EDITOR

export const toggleAboutSection = () => {
  return{
    type: TOGGLE_ABOUT, 
    payload: true
  }
}

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