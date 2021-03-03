import { Cookies } from 'react-cookie';
import { setSessionType } from '../Models/index';

export const setSession = (data: setSessionType) => {
  let cookies = new Cookies();
  if (data) {
    cookies.set('token', data.token, { path: '/' });
    cookies.set('email', data.email, { path: '/' });
  } else {
    removeSession();
  }
};

export const getSession = () => {
  let cookies = new Cookies();
  return {
    token: cookies.get('token'),
    email: cookies.get('email'),
  };
};

export const removeSession = () => {
  let cookies = new Cookies();
  cookies.remove('token', { path: '/' });
  cookies.remove('email', { path: '/' });
};
