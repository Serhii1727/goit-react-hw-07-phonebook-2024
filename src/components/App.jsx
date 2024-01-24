import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Title from './Title';
import css from './App.module.css';
import { getError, getLoading } from '../redux/selectors';
import Loader from './Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      {isLoading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <ContactList />
    </div>
  );
}
