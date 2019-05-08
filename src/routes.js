import Homepage from "./components/Homepage";
import ViewItem from "./components/ViewItem";
import Checkout from "./components/Checkout";


export default [
  {
    component: Homepage,
    name: "Home Page",
    exact: true,
    private: false,
    path: "/",
  },
  {
    component: Homepage,
    name: "Home Page",
    exact: true,
    private: false,
    path: "/search",
  },
  {
    component: Checkout,
    name: "Checkout",
    exact: true,
    private: true,
    path: "/checkout",
  },
  {
    component: ViewItem,
    name: "ViewItem",
    exact: true,
    private: false,
    path: "/:id",
  },
];
