const jsdom = require("jsdom");
const { JSDOM } = jsdom;


async function getURL() {
  const d = await JSDOM.fromURL("http://solid-bee.surge.sh/").then(dom => {
   return dom.serialize();
}) 
  let a = new JSDOM(d)
  let b = (a.window.document.querySelector("#lp").innerHTML)
  console.log(b)
};

// async function getURL(){
//   return ( new JSDOM( JSDOM.fromURL("http://solid-bee.surge.sh/").then(dom => {dom.serialize();
// })
//   ))}
getURL()
// let div = getURL().then(()=>console.log())

