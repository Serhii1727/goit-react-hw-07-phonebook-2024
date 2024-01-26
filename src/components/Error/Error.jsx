import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';
import css from './Error.module.css';

const Error = () => {
  const error = useSelector(selectError);

  return <p className={css.error}>{error}</p>;
};

export default Error;
