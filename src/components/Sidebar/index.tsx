import React from 'react';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <div>Super Admin</div>
      <p>Admin-menu</p>
      <hr />
      <div>Объявления</div>
      <hr />
      <div>Выход</div>
    </div>
  );
};

export default Sidebar;
