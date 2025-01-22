import s from './SearchBox.module.css'


export default function SearchBox({search,onSearch}) {
  return (
    <div className={s.boxSearch}>
        <p>Find contacts by name</p>
        <input type="text" onChange={(e)=>onSearch(e.target.value)} value={search} />
    </div>
  );
}
