import './App.css';

import {
    Typography,
    Box, Container, Grid, Button, CssBaseline, ThemeProvider
} from '@mui/material';
import { RapidCleanTheme } from "./themes/Theme.js";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import About from './pages/About';
import Estimates from './pages/Estimates';
import Appointments from './pages/Appointments';
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

// import { useEstimatesService } from "../services/useEstimatesService";
//
// const [estimate, getEstimate ] = useEstimatesService(initialValues);


function App() {

//const [currMenuItem, setCurrMenuItem] = useState(null);

// useEffect(() => {
//     setCurrMenuItem(menuItems[0]);
// }, [menuItems])

  return (

    <Container className='App' disableGutters maxWidth="xlg">

        <Box>
            <Header />
        </Box>

        <Box>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Nav />}>
                          <Route index element={<About />} />
                          <Route path="estimates" element={<Estimates />} />
                          <Route path="appointments" element={<Appointments />} />
                          <Route path="contact" element={<Contact />} />
                          <Route path="*" element={<ErrorPage />} />
                      </Route>
                  </Routes>
              </BrowserRouter>
        </Box>

        <Box>
            <Footer />
        </Box>

    </Container>
  );
}

export default App;
