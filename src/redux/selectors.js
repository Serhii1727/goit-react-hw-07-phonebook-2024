export const getContacts = state => {
  return state.contacts;
};

export const getFilter = state => {
  return state.filter;
};

export const getItems = state => {
  return state.contacts.contacts.items;
};

export const getLoading = state => {
  console.log(state.contacts.contacts.isLoading);
  return state.contacts.contacts.isLoading;
};

export const getError = state => {
  return state.contacts.contacts.error;
};
