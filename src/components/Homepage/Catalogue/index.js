import React, { Component } from 'react';
import { connect } from "react-redux";
import queryString from "query-string";

import { getProducts, searchProducts } from "../../../actions";

import CardItem from "../../common/CardItem"
import Sidebar from "../../common/Sidebar";
import Pagination from "../../common/Pagination";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";


class Catalogue extends Component {

  LIMIT = 6;
  ran = false;

  componentDidMount() {
    const pageNumber = this.getPageNumber();
    this.getProducts(pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { allProduct } = this.props;
    if (!this.ran) {
      this.getProducts(this.getPageNumber());
      this.ran = true;
    }
    if(!allProduct.isLoading && this.ran) {
      this.ran = false;
    }
  }

  getPageNumber () {
    const { search } = this.props.location;
    const q = queryString.parse(search);
    const pageNumber = q.page || 1;
    return parseInt(pageNumber);
  }

  getPageCount() {
    const limit = this.LIMIT;
    const { allProduct } = this.props;
    return allProduct.count > limit ? Math.ceil(allProduct.count/limit) : 1;
  }

  getProducts(pageNumber) {
    const query = this.getQuery(pageNumber);
    const { path } = this.props.match;
    if(path === "/search") {
      this.props.searchProducts(query);
    } else {
      this.props.getProducts(query);
    }
    this.setState({ 
      page: parseInt(pageNumber),
    });
  }

  gotoPage = (pageNumber) => {
    const { allProduct } = this.props;
    const query = this.getQuery(pageNumber)
    const { path } = this.props.match;

    if(!allProduct.isLoading){
      this.props.history.push({
        pathname: path,
        search: query,
      });
      this.getProducts(pageNumber);
    }
  }

  getQuery(pageNumber) {
    const limit = this.LIMIT;
    const query_string = this.getQueryString();
    let query = `?page=${pageNumber}&limit=${limit}`;
    if(query_string) {
      query = `${query}&query_string=${query_string}`;
    }
    return query;
  }

  getQueryString() {
    const { search } = this.props.location;
    const q = queryString.parse(search);
    return q.query_string;
  }

  nextPage = () => {
    const page = this.getPageNumber();
    const pageCount = this.getPageCount();
    if((page+1) <= pageCount) {
      this.gotoPage(page+1);
    }
  }

  prevPage = () => {
    const page = this.getPageNumber();
    if((page-1) >= 1) {
      this.gotoPage(page-1);
    }
  }

  render () {

    const { allProduct } = this.props;

    return (
      <section className="catalogue inner__container margin__hori__auto flex flex__wrap space__around">

        <Sidebar />

        <main 
          className="card__list flex__one">
          <span 
            className="flex flex__wrap space__between card__list__md__flex__start card__list__sm__space__around">
            {
              allProduct.rows.map((product, index) => {
                return (
                  <CardItem 
                    key={index}
                    product={product}
                  />
                )
              })
            }
          </span>
          <Pagination 
            page={this.getPageNumber()} 
            pageCount={this.getPageCount()}
            gotoPage={this.gotoPage}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        </main>
      </section>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allProduct: state.AllProduct,
  }
};

export default connect(mapStateToProps, {
  getProducts,
  searchProducts,
})(Catalogue);

