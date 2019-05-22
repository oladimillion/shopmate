
export default (state) => ([
  [
    {
      name: "address_1",
      label: "Address One",
      value: state.address_1 || "",
      required: true,
    },
    {
      name: "address_2",
      label: "Address Two",
      value: state.address_2 || "",
      required: false,
    },
  ],
  [
    {
      name: "city",
      label: "City",
      value: state.city || "",
      required: true,
    },
    {
      name: "region",
      label: "Region",
      value: state.region || "",
      required: true,
    },
  ],
  [
    {
      name: "postal_code",
      label: "Postal Code",
      value: state.postal_code || "",
      required: true,
    },
    {
      name: "country",
      label: "Country",
      value: state.country || "",
      required: true,
    },
  ],
]);
