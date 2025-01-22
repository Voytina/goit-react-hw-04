import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const KEY_PHONE_BOOK = 'book';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem(KEY_PHONE_BOOK));

    if (data) {
      return data;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(KEY_PHONE_BOOK, JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const visibileTask = contacts.filter(value =>
    value.name.toLowerCase().includes(filter.toLowerCase()),
  );

  function addContact(values, action) {
    const newContact = {
      ...values,
      id: crypto.randomUUID(),
    };
    setContacts(prev => [...prev, newContact]);
    action.resetForm();
  }

  function deleteContact(id) {
    setContacts(prev => prev.filter(value => value.id !== id));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox search={filter} onSearch={setFilter} />
      <ContactList list={visibileTask} onDelete={deleteContact} />
    </div>
  );
}
