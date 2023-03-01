import { ContactItem } from '../ContactItem/ContactItem';
import { ListBlock } from './ContactList.styled';
import { removeContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ListBlock>
      {filterContact().map(contact => {
        const { id } = contact;
        return (
          <ContactItem
            key={id}
            contactItem={contact}
            onClick={() => dispatch(removeContact(id))}
          />
        );
      })}
    </ListBlock>
  );
};
