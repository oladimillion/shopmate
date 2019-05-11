import axios from 'axios';

const createCookie = ({ accessToken, expires_in }) => {
  document.cookie=`accessToken=${accessToken}&expires=${expires_in}`;
}

export default ({ accessToken, expires_in, customer }) => {
  if (accessToken) {
    axios.defaults.headers.common['Authorization'] = accessToken;
    createCookie({ accessToken, expires_in });
    if(!localStorage.customer){
      localStorage.setItem("customer", JSON.stringify(customer));
    }
  } else {
    delete axios.defaults.headers.common['Authorization'];
    createCookie({ accessToken: "", expires_in: -1 });
    localStorage.removeItem("customer");
  }
}

