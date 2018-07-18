import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import ExampleHolder from './ExampleHolder/ExampleHolder';
import Footer from './Footer/Footer';

export default function HomePage() {
    return (
        <div>
            <Header /> 
            <Main />
            <ExampleHolder />
            <Footer /> 
        </div> 
    )
}