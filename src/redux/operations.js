import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contacts/sliceContacts';

axios.defaults.baseURL = 'https://65af29912f26c3f2139a345c.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');

    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(`Error, something went wrong`));
  }
};
