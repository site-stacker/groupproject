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
    },
  ]
}


export default function reducer(state = initialState, action){
  switch(action.type){
    default:
      return state
  }
}