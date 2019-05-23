/**
 * user login status check
 *
 * @name isLoggedIn
 * @function
 * @returns {boolean} login status
 */
export const isLoggedIn = () => !!localStorage.getItem("customer");
