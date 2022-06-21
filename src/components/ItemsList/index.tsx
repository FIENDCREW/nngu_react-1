import React from 'react';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  return (
    <div className={style.items_list__wrapper}>
      <div className={style.items_list}>
        <div>Объявления</div>
        <div>Всего:</div>
      </div>
      <button type="button" className={style.item_button}>
        Добавить
      </button>
    </div>
  );
};

export default ItemsList;
