
const func = jest.fn();

export default {
  history: {
    push: func,
  },
  location: {
    search: "12",
  },
  match: {
    path: "/search",
    params: {
      id: "2",
    }
  },
}
