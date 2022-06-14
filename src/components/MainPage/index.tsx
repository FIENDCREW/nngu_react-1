import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ItemsList from '../ItemsList';
import Sidebar from '../Sidebar';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.page_wrapper_list}>
        <Sidebar />
        <ItemsList />
      </div>
      <div className={style.content_wrapper}>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
