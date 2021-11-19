import axios from 'axios';

// this will call axios but the test receives moxios response instead from the real server
// note - the real server does not even have to run, not making any connection to server at all.
export const getSecretWord = async setSecretWord => {
  // return response from server
  const response = await axios.get('http://localhost:3030');
  setSecretWord(response.data);
};
