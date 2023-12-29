import axios from 'axios';

axios.defaults.baseURL = 'https://658e14c07c48dce94739ee30.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};

export const deleteContact = async itemId => {
  const response = await axios.delete(`/contacts/${itemId}`);
  return response.data;
};
