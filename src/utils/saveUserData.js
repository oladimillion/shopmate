
export default ({customer}) => {
  if (customer) {
    localStorage.setItem("customer", JSON.stringify(customer));
  } else {
    localStorage.removeItem("customer");
  }
}

