import React, { FC } from 'react';
import style from './Item.module.scss';

interface IItem {
  name: string;
  category: string;
  dataPablic: string;
  pablic: string;
}

const Item: FC<IItem> = (props) => {
  const { name, category, dataPablic, pablic } = props;
  return (
    <div className={style.item_spisok}>
      <p>{name}</p>
      <p>{category}</p>
      <p>{dataPablic}</p>
      <p>{pablic}</p>
    </div>
  );
};

export default Item;
