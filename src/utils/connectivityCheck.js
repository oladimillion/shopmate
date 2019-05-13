import toastr from "../utils/toastr";

export default (error, type) => {
  if(error.response) {
    return { type, payload: error.response.data };
  } else {
    toastr.error("No internet connectivity");
    return { type, payload: "No internet connectivity" };
  }
};
