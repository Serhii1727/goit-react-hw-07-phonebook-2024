import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import ContactListItem from 'components/ContactListItem';
import getFilterContacts from '../../services/getFilterContacts';
import css from './ContactList.module.css';

export default function ContactList() {
  const filter = useSelector(selectFilter);
  const { contacts } = useSelector(selectContacts);
  const { items } = contacts;

  const visibleContacts = getFilterContacts(filter, items);

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} number={phone} />
          ))}
      </ul>
    </>
  );
}
