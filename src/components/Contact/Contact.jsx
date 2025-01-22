import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

import s from './Contact.module.css';

export default function Contact({ onDelete, item: { name, number, id } }) {
  return (
    <>
      <div>
        <div className={s.box}>
          <IoPersonSharp />
          <p>{name}</p>
        </div>
        <div className={s.box}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <div className={s.btnBox}>
        <button
          className={s.btnDelete}
          onClick={() => {
            onDelete(id);
          }}>
          Delete
        </button>
      </div>
    </>
  );
}
