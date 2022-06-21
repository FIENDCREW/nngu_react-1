import React from 'react';
import Item from '../Item';
import Search from '../Search';
import style from './ItemsList.module.scss';

const DataProduct = [
  {
    id: 1,
    name: 'React',
    category: 'book',
    dataPablic: 'data',
    pablic: 'true',
  },
  {
    id: 2,
    name: 'JavaScript',
    category: 'book',
    dataPablic: 'data',
    pablic: 'true',
  },
  {
    id: 3,
    name: 'BMX',
    category: 'Sport',
    dataPablic: 'data',
    pablic: 'true',
  },
  {
    id: 4,
    name: 'Лыжи',
    category: 'Sport',
    dataPablic: 'data',
    pablic: 'true',
  },
  {
    id: 5,
    name: 'IPhone',
    category: 'Telephone',
    dataPablic: 'data',
    pablic: 'true',
  },
  {
    id: 6,
    name: 'MacBook',
    category: 'LapTop',
    dataPablic: 'data',
    pablic: 'true',
  },
  {
    id: 7,
    name: 'VANS',
    category: 'Clothes',
    dataPablic: 'data',
    pablic: 'true',
  },
  {
    id: 8,
    name: 'XBox',
    category: 'Games',
    dataPablic: 'data',
    pablic: 'true',
  },
];

const ItemsList = () => {
  return (
    <div className={style.items_list__wrapper}>
      <div className={style.item_sort}>
        <div className={style.items_list}>
          <div>Объявления</div>
          <div>Всего:</div>
        </div>
        <button type="button" className={style.item_button}>
          Добавить
        </button>
      </div>
      <Search />
      <div className={style.item_json}>
        {DataProduct.map((item) => {
          const { id, name, dataPablic, pablic, category } = item;
          return (
            <Item
              key={`ID: ${id}`}
              name={name}
              dataPablic={dataPablic}
              pablic={pablic}
              category={category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
