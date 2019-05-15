import axios from 'axios';

const createCookie = ({ accessToken, expires_in }) => {
  const now = new Date();
  const hours = parseInt(expires_in.slice(0,2));
  now.setTime(now.getTime() + (hours * 60 * 60 *1000));
  document.cookie=`accessToken=${accessToken};expires=${now};`;
}

export default ({ accessToken, expires_in }) => {
  if (accessToken && expires_in) {
    axios.defaults.headers.common['USER-KEY'] = accessToken;
    createCookie({ accessToken, expires_in });
  } else if (accessToken) {
    axios.defaults.headers.common['USER-KEY'] = accessToken;
  } else {
    delete axios.defaults.headers.common['USER-KEY'];
    createCookie({ accessToken: "", expires_in: "-1" });
  }
}

