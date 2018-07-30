const fs = require("fs")
const cheerio = require('cheerio')

let readMe = fs.readFileSync("./public/test.html", "utf8");


let test = '<div id="lp"><div style="width: 100%; height: 700px; position: relative; z-index: 0; display: flex; flex-flow: column; justify-content: center; align-items: center;"><div><h3 style="position: absolute; top: 10px; left: 40px; border: none; z-index: 1; font-family: &quot;Roboto Slab&quot;;">dsfsdf</h3></div><div class="sc-bwzfXH hxDhxq"><h1 style="font-family: &quot;Roboto Slab&quot;; color: rgb(26, 174, 252); width: 100%; text-align: center; position: relative; z-index: 1; margin: 0px;">asfdsafsadf</h1><h3 style="font-family: &quot;Roboto Slab&quot;; width: 100%; text-align: center; position: relative; z-index: 1; margin: 10px 0px;">sadfasfsaf</h3></div><button class="sc-bdVaJa bUuDew" style="font-family: &quot;Roboto Slab&quot;; background-color: rgb(26, 174, 252); color: rgb(40, 152, 251);">asfsaf</button><img src="https://cdn.dribbble.com/users/39905/screenshots/1353646/simple-browser-mockup.png" style="height: 400px; z-index: 1;"><div style="width: 100%; height: 700px; background-color: red; position: absolute; z-index: 0; opacity: 0; transition: 0.2s ease-in;"></div><div style="width: 100%; height: 100%; background-image: url(&quot;https://images.unsplash.com/photo-1532943126512-e2bcf68a488c?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjMxODk1fQ&amp;s=adadc75487b5b5ff0dbe04a933652c77&quot;); background-size: cover; background-position: center center; position: absolute; z-index: -2; display: flex; flex-flow: column; justify-content: center; align-items: center;"></div></div><div class="sc-EHOje ydXDT"><h2 class="sc-htpNat jnVHpP" style="font-family: &quot;Roboto Slab&quot;;">Learn about our company below</h2><p class="sc-bxivhb ByigS" style="font-family: &quot;Roboto Slab&quot;;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><div class="sc-ifAKCX dPUsda"></div></div><div class="sc-dnqmqq jtQfUT"><div class="sc-bZQynM eCPonQ"><div class="sc-gzVnrw hiRQPZ"><h2 class="sc-htpNat jnVHpP">Feature 1</h2><p class="sc-htoDjs haEJrz">Feature 1</p></div><div class="sc-gzVnrw hiRQPZ"><h2 class="sc-htpNat jnVHpP">Feature 2</h2><p class="sc-htoDjs haEJrz">Feature 2</p></div><div class="sc-gzVnrw hiRQPZ"><h2 class="sc-htpNat jnVHpP">Feature 3</h2><p class="sc-htoDjs haEJrz">Feature 3</p></div></div></div></div>'

let boilerplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Lato|Lora|Merriweather|Montserrat|Noto+Sans|Open+Sans|Open+Sans+Condensed:300|Oswald|PT+Sans|PT+Serif|Playfair+Display|Poppins|Raleway|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Slabo+27px|Source+Sans+Pro|Ubuntu" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <title>React App</title>
  </head>
  <body>
      ${test}
  </body>
</html>`

const $ = cheerio.load(boilerplate)

fs.writeFileSync("./build/index.html", boilerplate)

console.log($(test).html())

