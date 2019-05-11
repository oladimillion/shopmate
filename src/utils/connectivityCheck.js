export default (error, type) => {
  if(error.response) {
    return { type, payload: error.response.data };
  } else {
    return { type, payload: "No internet connectivity" };
  }
};
