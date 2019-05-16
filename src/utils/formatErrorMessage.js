export default (error) =>  {
  const { message, field } = error;
  if(field) {
    return message.replace("The field(s)", field);
  }
  return message;
}
