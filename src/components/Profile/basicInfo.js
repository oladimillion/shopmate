export default (state) => ([
  [
    {
      name: "name",
      label: "Name",
      value: state.name || "",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      value: state.email || "",
      required: true,
      type: "email",
    },
  ],
  [
    {
      name: "password",
      label: "Password",
      value: state.password || "",
      required: false,
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      value: state.confirmPassword || "",
      required: false,
      type: "password",
    },
  ],
  [
    {
      name: "day_phone",
      label: "Day Phone Number",
      value: state.day_phone || "",
      required: false,
    },
    {
      name: "eve_phone",
      label: "Evening Phone Number",
      value: state.eve_phone || "",
      required: false,
    },
  ],
  [
    {
      name: "mob_phone",
      label: "Mobile Phone Number",
      value: state.mob_phone || "",
      required: false,
    },
    {
      name: "",
      label: "",
      value: "",
      required: false,
      hidden: true,
    },
  ],
]);


