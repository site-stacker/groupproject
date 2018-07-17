const initialState ={
  background_img: "https://images.unsplash.com/photo-1531715191146-cd2c1770a253?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f96160272735a53e3c67d6fb1aa922ce&auto=format&fit=crop&w=1950&q=80",
  background_color: "rgba(0,0,0,1)",
  background_combined: true
}


export default function reducer(state = initialState, action){
  switch(action.type){
    default:
      return state
  }
}