import { stripeKey } from "./keys";


export default {
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
