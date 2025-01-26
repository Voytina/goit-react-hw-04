import { useState } from 'react';
import s from './SearchBar.module.css';
import toast from "react-hot-toast";


import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ searchInput }) {


  const [value, setValue] = useState('');

  function onSubmitForm(e) {
    e.preventDefault();
    if (!value.trim()) {
      toast.error('Please enter a query!');
      return;
  }
    searchInput(value);
  }

  return (
    <header className={s.headerContainer}>
      <form className={s.form} onSubmit={onSubmitForm}>
        <div className={s.inputContainer}>
          <button type="submit" className={s.searchButton}>
            <CiSearch />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
            name="value"
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </div>
      </form>
    </header>
  );
}
