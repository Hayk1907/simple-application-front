import axios from 'axios';

const SIGN_IN_ENDPOINT = '/api/signin';
const SIGN_UP_ENDPOINT = '/api/signup';

async function signIn(userData) {
  const {data} = await axios.post(SIGN_IN_ENDPOINT, userData);
  return data;
}

async function signUp(userData) {
  const {data} = await axios.post(SIGN_UP_ENDPOINT, userData);
  return data;
}

export default {signIn, signUp};
