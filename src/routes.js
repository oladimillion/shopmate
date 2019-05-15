import Homepage from "./components/Homepage";
import ViewItem from "./components/ViewItem";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";


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
    component: Profile,
    name: "Profile",
    exact: true,
    private: true,
    path: "/profile",
  },
  {
    component: ViewItem,
    name: "ViewItem",
    exact: true,
    private: false,
    path: "/:id",
  },
];
