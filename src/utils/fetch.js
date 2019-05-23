import { stripeKey } from "./keys";


export default {
  /**
   * post
   * An extended version of fetch API
   *
   * @name post
   * @function
   * @param {string} url
   * @param {urlencoded string} body
   * @param {} contentType="application/x-www-form-urlencoded"
   * @returns {promise} customised fetch api
   */
  post: (url, body,  contentType="application/x-www-form-urlencoded") => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": contentType,
        "Authorization": "Bearer " + stripeKey 
      },
      body,
    })
      .then(res => res.json())
      .then(res => {
        if(res.error) {
          throw res;
        } else {
          return res;
        }
      });
  },
}
