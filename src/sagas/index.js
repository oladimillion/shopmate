import { all, fork } from "redux-saga/effects";
import productWatcherArray from "./products";
import departmentWatcherArray from "./departments";
import categoryWatcherArray from "./categories";
import usersWatcherArray from "./users";
import cartWatcherArray from "./cart";
import shippingRegionWatcherArray from "./shippingRegion";
import orderWatcherArray from "./order";
import taxWatcherArray from "./tax";
import stripeWatcherArray from "./stripe";


/**
 * saga root
 *
 * @name root
 * @function
 */
export default function* root() {
  yield all([
    ...productWatcherArray.map(productWatcher => fork(productWatcher)),
    ...departmentWatcherArray.map(departmentWatcher => fork(departmentWatcher)),
    ...categoryWatcherArray.map(categoryWatcher => fork(categoryWatcher)),
    ...usersWatcherArray.map(usersWatcher => fork(usersWatcher)),
    ...cartWatcherArray.map(cartWatcher => fork(cartWatcher)),
    ...shippingRegionWatcherArray.map(shippingRegionWatcher => fork(shippingRegionWatcher)),
    ...orderWatcherArray.map(orderWatcher => fork(orderWatcher)),
    ...taxWatcherArray.map(taxWatcher => fork(taxWatcher)),
    ...stripeWatcherArray.map(stripeWatcher => fork(stripeWatcher)),
  ])
}
