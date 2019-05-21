import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import queryString from "query-string";

import { 
  getProducts, 
  searchProducts, 
  getProductsByCategory,
  getProductsByDepartment,
} from "../../../actions";

import CardItem from "../../common/CardItem"
import Sidebar from "../../common/Sidebar";
import Pagination from "../../common/Pagination";
import Loader from "../../common/Loader";

import "./index.css";
import "./index.md.css";
import "./index.sm.css";


class Catalogue extends Component {

  LIMIT = 6;
  requestSent = false;

  componentDidMount() {
    const pageNumber = this.getPageNumber();
    this.getProducts(pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { allProduct } = this.props;
    if (!this.requestSent) {
      this.requestSent = true;
      this.getProducts(this.getPageNumber());
    }
    if(!allProduct.isLoading && this.requestSent) {
      this.requestSent = false;
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
    const { category, department } = this.getQueryParams();
    const { path } = this.props.match;
    if(path === "/search") {
      this.props.searchProducts(query);
    } else {
      if(category) {
        this.props.getProductsByCategory({query, category});
      } else if(department) {
        this.props.getProductsByDepartment({query, department});
      } else {
        this.props.getProducts(query);
      }
    }
  }

  gotoPage = (pageNumber) => {
    const { allProduct } = this.props;
    const query = this.getQuery(pageNumber)
    const { path } = this.props.match;

    if(!allProduct.isLoading){
      this.props.history.push({
        pathname: path,
        search: query.replace(/limit=[\d]+&/, ""),
      });
      this.requestSent = true;
      this.getProducts(pageNumber);
    }
  }

  getQuery(pageNumber) {
    const limit = this.LIMIT;
    const { query_string, category, department } = this.getQueryParams();
    let query = `?${queryString.stringify({limit, page: pageNumber})}`;
    if(query_string) {
      query = `${query}&${queryString.stringify({query_string})}`;
    } else if(category) {
      query = `${query}&${queryString.stringify({department, category})}`;
    } else if(department) {
      query = `${query}&${queryString.stringify({department})}`;
    }
    return query;
  }

  getQueryParams = () => {
    const { search } = this.props.location;
    return queryString.parse(search);
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

        <Sidebar 
          {...this.props} 
          getQueryParams={this.getQueryParams}
        />

        <main 
          className="card__list flex__one">
          <Fragment>
            {
              allProduct.isLoading ? 
                (
                  <Loader className="loader__height" />
                ) :
                (
                  <span 
                    className="flex flex__wrap space__between card__list__md__flex__start card__list__sm__space__around">
                    {
                      !allProduct.count && 
                        (
                          <h3 className="text__center flex__one">No item to display</h3>
                        )
                    }
                    {
                      allProduct.data.map((product, index) => {
                        return (
                          <CardItem 
                            key={index}
                            product={product}
                          />
                        )
                      })
                    }
                  </span>

                )
            }
          </Fragment>
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
  getProductsByCategory,
  getProductsByDepartment,
})(Catalogue);

