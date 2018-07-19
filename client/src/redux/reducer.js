import axios from "axios";

const initialState ={
  header:{
    background_color: "#313A5A",
    background_combined: false,
    font_color: "red",
    heading: "This is a sample heading for the landing page we are building with the super builder",
    subheading: "This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader.",
    product_img: "https://mockuphone.com/static/images/devices/apple-iphone6-spacegrey-portrait.png",
    product_img: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/bb311e4d3417ac027a5e4545146389e7/usecases-board02.jpg",
    logo: "https://static.mailchimp.com/web/brand-assets/logo-script-light.svg",
    button_text: "Try this app"
  },
  about:{
    heading: "About Us",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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
  color_themes: [
      {
          "color_id": 1,
          "color_palette_name": "Blue",
          "color_palette": ["#FFFFFF", "#00CC47", "#0166FF", "#05112A", "#00B9FF"]
      },
      {
          "color_id": 2,
          "color_palette_name": "Orange",
          "color_palette": ["#FFFFFF", "#2050D3", "#F24A2A", "#D44125", "#F7F9FA"]
      },
      {
          "color_id": 3,
          "color_palette_name": "Ocher",
          "color_palette": ["#FFFFFF", "#1A0F2F", "#CCAA3F", "#957A3E", "#AB8F3D"]
      },
      {
          "color_id": 4,
          "color_palette_name": "Beige",
          "color_palette": ["#FFFFFF", "#666663", "#F2DEC5", "#E0C295", "#E2C69C"]
      },
      {
          "color_id": 5,
          "color_palette_name": "Yellow",
          "color_palette": ["#FFFFFF", "#353740", "#F5CA0A", "#F5870A", "#FCAE02"]
      },
      {
          "color_id": 6,
          "color_palette_name": "Orange",
          "color_palette": ["#FFFFFF", "#2050D3", "#F24A2A", "#D44125", "#F7F9FA"]
      },
      {
          "color_id": 7,
          "color_palette_name": "Ocher",
          "color_palette": ["#FFFFFF", "#1A0F2F", "#CCAA3F", "#957A3E", "#AB8F3D"]
      },
      {
          "color_id": 8,
          "color_palette_name": "Beige",
          "color_palette": ["#FFFFFF", "#666663", "#F2DEC5", "#E0C295", "#E2C69C"]
      }
  ],
  fonts_list:[],
  currentProject:{},
  sections:["About Us", "Features"],
  contentSection: "Sections",
  sectionSelected: "",
  toggleSidebar: false
}


const GET_FONTS_LIST = "GET_FONTS_LIST";
const GET_PROJECT = "GET_PROJECT";
const CHANGE_SELECTED_SECTION = "CHANGE_SELECTED_SECTION"
const UPDATE_HEADER_HEADING = "UPDATE_HEADER_HEADING"
const UPDATE_HEADER_SUBHEADING = "UPDATE_HEADER_SUBHEADING"
const UPDATE_HEADER_BUTTON = "UPDATE_HEADER_BUTTON"
const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
const UPDATE_HEADER_IMAGE = "UPDATE_HEADER_IMAGE"
const UPDATE_HEADER_BG = "UPDATE_HEADER_BG"

export default function reducer(state = initialState, action){
  switch(action.type){
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {toggleSidebar: !state.toggleSidebar})

    case GET_FONTS_LIST + "_FULFILLED":
      return Object.assign({}, state, {fonts_list: action.payload})
    case GET_PROJECT + "_FULFILLED":
      return Object.assign({}, state, {currentProject: action.payload[0] }) 
    case CHANGE_SELECTED_SECTION:
      return Object.assign({}, state, {sectionSelected: action.payload }) 
    
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
    default:
      return state
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
  return {
    type: CHANGE_SELECTED_SECTION,
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


//TOGGLE SIDEBAR
export const toggleSidebar = () => {
  return{
    type: TOGGLE_SIDEBAR,
    payload: true
  }
}