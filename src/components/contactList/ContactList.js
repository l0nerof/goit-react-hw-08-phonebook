import PropTypes from 'prop-types';
import css from './ContactList.module.css';

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
