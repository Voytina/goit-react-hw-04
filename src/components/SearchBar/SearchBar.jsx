import { useState } from 'react';
import s from './SearchBar.module.css';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ getQueverySearch }) {
  const [val, setVal] = useState('');

  function submitForm(e) {

    e.preventDefault();
    getQueverySearch(val)
  }

  return (
    <header className={s.headerContainer}>
      <form className={s.form} onSubmit={submitForm}>
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
              setVal(e.target.value);
            }}
          />
        </div>
      </form>
    </header>
  );
}
