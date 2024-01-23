import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import ContactListItem from 'components/ContactListItem';
import getFilterContacts from '../../services/getFilterContacts';
import css from './ContactList.module.css';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);

  const visibleContacts = getFilterContacts(filter, contacts);

  return (
    <ul className={css.list}>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
}
