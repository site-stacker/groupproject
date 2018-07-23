import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
<Provider store={store}>
<HashRouter >
{routes}
</HashRouter >
</Provider>
, document.getElementById('root'));
