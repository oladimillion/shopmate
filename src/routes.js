import Homepage from "./components/Homepage";
import ViewItem from "./components/ViewItem";


export default [
  {
    component: Homepage,
    name: "Home Page",
    exact: true,
    private: false,
    path: "/",
  },
  {
    component: ViewItem,
    name: "ViewItem",
    exact: true,
    private: false,
    path: "/:id",
  },
]
