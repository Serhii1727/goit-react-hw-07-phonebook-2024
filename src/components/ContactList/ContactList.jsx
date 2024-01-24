import { useSelector } from 'react-redux';

import { getContacts, getFilter } from '../../redux/selectors';
import ContactListItem from 'components/ContactListItem';
import getFilterContacts from '../../services/getFilterContacts';
import Loader from 'components/Loader';
import css from './ContactList.module.css';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);
  const { items, isLoading, error } = contacts;
  console.log(isLoading);

  const visibleContacts = getFilterContacts(filter, items);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <ul className={css.list}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} number={phone} />
          ))}
      </ul>
    </>
  );
}
