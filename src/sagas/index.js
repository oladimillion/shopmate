import { all, fork } from "redux-saga/effects";
import productWatcherArray from "./products";
import departmentWatcherArray from "./departments";
import categoryWatcherArray from "./categories";
import usersWatcherArray from "./users";


export default function* root() {
  yield all([
    ...productWatcherArray.map(productWatcher => fork(productWatcher)),
    ...departmentWatcherArray.map(departmentWatcher => fork(departmentWatcher)),
    ...categoryWatcherArray.map(categoryWatcher => fork(categoryWatcher)),
    ...usersWatcherArray.map(usersWatcher => fork(usersWatcher)),
  ])
}
