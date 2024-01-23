import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/sliceContacts';
import css from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <span className={css.span}>{name}</span>
      <span>{number}</span>
      <button
        className={css.button__delete}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}
