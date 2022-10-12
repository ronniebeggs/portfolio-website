// import React from 'react';
// import Header from './components/header';

// function App(path) {
//   return (
//     <div className="App">
//       <Header></Header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home-page';
import Work from './components/work-page';
import Contact from './components/contact-page';

function App() {
    return (
        <BrowserRouter>
              <div className='App'>
                <header>
                  <nav>
                      <span><Link to='/home-page'>Home</Link></span>
                      <span><Link to='/work-page'>Work</Link></span>
                      <span><Link to='/contact-page'>Contact</Link></span>
                  </nav>
              </header>
              <Routes>
                  <Route path='/home-page' element={<Home />}></Route>
                  <Route path='/work-page' element={<Work />}></Route>
                  <Route path='/contact-page' element={<Contact />}></Route>
              </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
        