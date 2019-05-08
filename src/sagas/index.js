import { all, fork } from "redux-saga/effects";
import productWatcherArray from "./products";


export default function* root() {
  yield all([
    ...productWatcherArray.map(productWatcher => fork(productWatcher)),
  ])
}
