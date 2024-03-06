import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from 'pages/AboutPage/ui/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async';
import { Suspense, useContext, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      
      <Navbar/>
      <div className='content-page'>
        <Sidebar/>
        <AppRouter/>
      </div>
      
    </div>
  );
};

export default App;
