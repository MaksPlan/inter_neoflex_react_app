import React from 'react';
import MainPage from './entities/MainPage/MainPage';
import style from './App.module.css';
import MainLayout from './MainLayot/MainLayout';
import { Route, Routes } from 'react-router-dom';
import BasketPage from './entities/BasketPage/BasketPage';

function App() {
  return (
    <div className={style.wrapper}>
      <MainLayout>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/basket' element={<BasketPage/>} />
        </Routes>
        
      </MainLayout>

    </div>

  );
}

export default App;
