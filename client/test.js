import React from "react";
import ReactDOMServer from 'react-dom/server';
import LandingPage from "./src/landing_page/LandingPage"


console.log(ReactDOMServer.renderToStaticMarkup(<LandingPage />))