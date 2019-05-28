import axios from "axios";

/**
 * add token to the cookie storage
 *
 * @name createCookie
 * @function
 * @param {string} {accessToken} token
 * @param {string} {expires_in} validation period of a token
 */
const createCookie = ({ accessToken, expires_in }) => {
  const now = new Date();
  const hours = parseInt(expires_in.slice(0,2));
  now.setTime(now.getTime() + (hours * 60 * 60 *1000));
  document.cookie=`accessToken=${accessToken};expires=${now};`;
}

/**
 * adds to Authorization token the axios headers
 *
 * @name default
 * @function
 * @param {string} {accessToken} authentication token
 * @param {string} {expires_in} token validity period
 */
export default ({ accessToken, expires_in }) => {
  if (accessToken && expires_in) {
    axios.defaults.headers.common["USER-KEY"] = accessToken;
    createCookie({ accessToken, expires_in });
  } else if (accessToken) {
    axios.defaults.headers.common["USER-KEY"] = accessToken;
  } else {
    delete axios.defaults.headers.common["USER-KEY"];
    createCookie({ accessToken: "", expires_in: "-1" });
  }
}

