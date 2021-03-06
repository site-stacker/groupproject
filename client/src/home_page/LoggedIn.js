import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

export default function LoggedIn() {
    return (
        <div>
            <Header />
            <Main />
            <Projects />
            <Footer />
        </div> 
    )
}