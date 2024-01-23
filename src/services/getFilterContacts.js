export default function getFilterContacts(filter, contacts) {
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizeFilter);
  });
}
