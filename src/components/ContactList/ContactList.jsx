import Contact from '../Contact/Contact';

import s from './ContactList.module.css';

export default function ContactList({ list,onDelete }) {
  return (
    <ul className={s.list}>
      {list.map(value => {
        return (
          <li key={value.id} className={s.listItem}>
            <Contact item={value} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
