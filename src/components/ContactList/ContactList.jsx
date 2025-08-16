import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { getContacts, getFilter } from '../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};
