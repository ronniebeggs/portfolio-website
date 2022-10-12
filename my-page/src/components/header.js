import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './home-page';
import Work from './work-page';
import Contact from './contact-page';

function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <span><Link to='/home-page'>Home</Link></span>
                    <span><Link to='/work-page'>Work</Link></span>
                    <span><Link to='/contact-page'>Contact</Link></span>
                </nav>
            </header>
            <Routes>
                <Route path='/home-page'><Home /></Route>
                <Route path='/work-page'><Work /></Route>
                <Route path='/contact-page'><Contact /></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Header
        