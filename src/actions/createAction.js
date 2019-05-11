const createAction = (type, data) => {
  return {
    type, payload: data,
  }
}

export { createAction };
