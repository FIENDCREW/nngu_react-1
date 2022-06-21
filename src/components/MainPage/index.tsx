import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ItemsList from '../ItemsList';
import List from '../List';
import Search from '../Search';
import Sidebar from '../Sidebar';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={style.page_wrapper}>
      <div className={style.page_container}>
        <Header />
        <div className={style.page_main}>
          <div>
            <Sidebar />
          </div>
          <div className={style.page_content}>
            <ItemsList />
            <Search />
            <List />
          </div>
        </div>
        <div className={style.page_footer}> </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
