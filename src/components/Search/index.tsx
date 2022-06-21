import React from 'react';
import style from './Search.module.scss';

const Search = () => {
  return (
    <div className={style.searchbar}>
      <input type="text" className={style.input_search} placeholder="Найти объявление" />
      <div className={style.frome_nuber}>
        <p>1-8 из 145</p>
        <p>Стрелки</p>
      </div>
    </div>
  );
};

export default Search;
