import React, { useMemo, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ResponsiveAppBar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './components/404';
import Resources from './components/Resources';
import { Theme, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import Members from './components/Members';
import { Member } from './types/member';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  const [allIds, setAllIds] = useState<Member[]>([
    {name: "Antonio Kam", id: "2017TUNG13"},
    {name: "An Le", id: "2015LEAN01"},
    {name: "Vivek Verma", id: "2016VERM04"},
    {name: "Aidan Leung", id: "2015LEUN01"},
    {name: "Cindy Huang", id: "2019HUAN73"},
    {name: "Tim Elnitiarta", id: "2016ELNI01"},
    {name: "Keaton Ellis", id: "2012ELLI01"},
    {name: "Heidi Chan", id: "2018CHAN50"},
    {name: "Ethan Jan", id: "2014JANE02"},
    {name: "Ryan Lee", id: "2023LEER01"},
    {name: "Tim Xie", id:"2015XIET01"}

].sort(compareNames))

  function compareNames(a: Member, b: Member) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode]
  );

  return (
    <>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resources" element={<Resources />} />
          <Route path="/members" element={<Members allIds={allIds}/>} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={ <Navigate to="/404" replace />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
