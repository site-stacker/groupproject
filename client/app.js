const fs = require("fs")
const cheerio = require('cheerio')

const file = fs.readFileSync("./public/index.html", "utf8")

console.log(file.document)

let test = "file.document"

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

