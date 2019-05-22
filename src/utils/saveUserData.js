
/**
 * add/remove customer to/from the localstorage
 *
 * @name default
 * @function
 * @param {object} {customer} customer info
 */
export default ({customer}) => {
  if (customer) {
    localStorage.setItem("customer", JSON.stringify(customer));
  } else {
    localStorage.removeItem("customer");
  }
}

