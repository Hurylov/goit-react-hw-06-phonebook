import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 style={{ margin: 0, padding: 0 }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ margin: 0, padding: 0 }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
