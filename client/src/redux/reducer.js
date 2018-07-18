import axios from "axios";

const initialState ={
  header:{
    background_img: "https://images.unsplash.com/photo-1531715191146-cd2c1770a253?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f96160272735a53e3c67d6fb1aa922ce&auto=format&fit=crop&w=1950&q=80",
    background_color: "#313A5A",
    background_combined: true,
    font_color: "red",
    heading: "This is a sample heading for the landing page we are building with the super builder",
    subheading: "This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader. This is the subheader.",
    product_img: "https://mockuphone.com/static/images/devices/apple-iphone6-spacegrey-portrait.png",
    product_img: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/bb311e4d3417ac027a5e4545146389e7/usecases-board02.jpg",
    logo: "https://static.mailchimp.com/web/brand-assets/logo-script-light.svg"
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
      }
  ],
  fonts_list:[]
}


const GET_FONTS_LIST = "GET_FONTS_LIST"

export default function reducer(state = initialState, action){
  switch(action.type){
    case GET_FONTS_LIST + "_FULFILLED":
      return Object.assign({}, state, {fonts_list: action.payload})
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