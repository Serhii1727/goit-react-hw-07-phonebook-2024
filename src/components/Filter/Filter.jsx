import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/sliceFilter';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <label className={css.label}>
      <span>Find contacts by name</span>
      <input onChange={changeFilter} type="text" className={css.input} />
    </label>
  );
}
