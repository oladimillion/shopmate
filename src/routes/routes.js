import NavBar from "../components/NavBar";
import ViewCart from "../components/ViewCart";
import ViewOrder from "../components/ViewOrder";
import Login from "../components/Login";
import Register from "../components/Register";

import Homepage from "../components/Homepage";
import ViewItem from "../components/ViewItem";
import Checkout from "../components/Checkout";
import Profile from "../components/Profile";


export const components = [
  {
    name: "NavBar",
    component: NavBar,
  },
  {
    name: "ViewOrder",
    component: ViewOrder,
  },
  {
    name: "ViewCart",
    component: ViewCart,
  },
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Register",
    component: Register,
  },
];


export default [
  {
    component: Homepage,
    name: "Home Page",
    exact: true,
    protected: false,
    path: "/",
  },
  {
    component: Homepage,
    name: "Home Page",
    exact: true,
    protected: false,
    path: "/search",
  },
  {
    component: Checkout,
    name: "Checkout",
    exact: true,
    protected: false,
    path: "/checkout",
  },
  {
    component: Profile,
    name: "Profile",
    exact: true,
    protected: true,
    path: "/profile",
  },
  {
    component: ViewItem,
    name: "ViewItem",
    exact: true,
    protected: false,
    path: "/:id",
  },
];
