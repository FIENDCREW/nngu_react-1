import React from 'react';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  return (
    <div className={style.items_list__wrapper}>
      <p>Список товаров:</p>
      <div className={style.items_list}>
        <div>Spisok</div>
      </div>
    </div>
  );
};

export default ItemsList;
