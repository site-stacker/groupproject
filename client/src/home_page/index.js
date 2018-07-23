import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import ExampleHolder from './ExampleHolder/ExampleHolder';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Login from '../sidebar/Login/Login';

export default function HomePage() {
    return (
        <div>
            <Header /> 
            <Main />
            <ExampleHolder />
            <Features />
            <Footer /> 
            <Login />
        </div> 
    )
}