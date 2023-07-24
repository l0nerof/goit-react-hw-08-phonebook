import { useEffect } from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContactAsync,
  deleteContactAsync,
  fetchContactsAsync,
} from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filterSlice';
import css from './Contacts.module.css';

export function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  const handleSubmit = (name, number) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContactAsync(newContact));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  return (
    <div style={{ marginLeft: 40 }}>
      <h1 className={css.Main}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className={css.Main}>Contacts</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ContactList
          contacts={getFilteredContacts()}
          handleDeleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
}
