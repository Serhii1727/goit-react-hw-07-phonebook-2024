import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Title from './Title';
import css from './App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
