/**
 * formats error messages
 *
 * @name default
 * @function
 * @param {object} error
 * @returns {string} error message
 */
export default (error) =>  {
  const { message, field } = error;
  if(field) {
    return message.replace("The field(s)", field);
  }
  return message;
}
