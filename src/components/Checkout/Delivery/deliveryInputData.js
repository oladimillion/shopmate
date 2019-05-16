export default (state) => {
  return [
    [
      {
        name: "first_name",
        label: "First name",
        value: state.first_name || "",
      },
      {
        name: "last_name",
        label: "Last name",
        value: state.last_name || "",
      },
    ],
    [
      {
        name: "address",
        label: "Address",
        value: state.address || "",
      },
      {
        name: "city",
        label: "City",
        value: state.city || "",
      },
    ],
    [
      {
        name: "state",
        label: "State",
        value: state.state || "",
      },
      {
        name: "postal_code",
        label: "Zip code",
        value: state.postal_code || "",
      },
    ],
    [
      {
        name: "country",
        label: "Country",
        value: state.country || "",
      },
      {
        name: "",
        label: "",
        value: "",
        hidden: true,
      },
    ],
  ];
}
