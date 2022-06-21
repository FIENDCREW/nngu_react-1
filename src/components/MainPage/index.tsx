import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ItemsList from '../ItemsList';
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
          </div>
        </div>
        <div className={style.page_footer}> </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
