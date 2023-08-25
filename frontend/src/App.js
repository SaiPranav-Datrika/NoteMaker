
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './Screens/LandinPage/LandingPage';
import MyNotes from './Screens/MyNotes/MyNotes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
    <BrowserRouter>
     
      <Header />
      <main>
        <Routes>
        <Route path="/" Component={LandingPage} exact/>
         <Route path="/mynotes" Component={()=> <MyNotes/>}/>
        </Routes>
      </main>
      
       <Footer />
       </BrowserRouter>

   
  );
}

export default App

