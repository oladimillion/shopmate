import React from 'react';
import CardItem from "../../common/CardItem"
import Sidebar from "../../common/Sidebar";
import Pagination from "../../common/Pagination";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";

const Catalogue = () => {
  return (
    <section className="catalogue inner__container margin__hori_auto flex flex__wrap space__around">

      <Sidebar />

      <main 
        className="card__list flex__one">
        <span className="flex flex__wrap space__between card__list__md__flex__start card__list__sm__space__around">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </span>
        <Pagination />
      </main>
    </section>
  )
}

export default Catalogue;

