import toastr from "../utils/toastr";

/**
 * Checks whether there is internet connectivity or not
 *
 * @returns {object} action type and payload
 */
export default (error, type) => {
  if(error.response) {
    return { type, payload: error.response.data };
  } else {
    toastr.error("No internet connectivity or Unknown error");
    return { type, payload: "No internet connectivity or Unknown error" };
  }
};
