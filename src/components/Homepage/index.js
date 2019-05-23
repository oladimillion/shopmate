import React, { Component } from 'react';
import CategoryNavSection from "./CategoryNavSection";
import Catalogue from "./Catalogue";
import Popular from "../common/Popular";
import HorizontalSpacing from "../common/HorizontalSpacing";
import Featured from "../common/Featured";
import NewsLetter from "../common/NewsLetter";

import './index.css';

/**
 * Homepage component
 * @name Homepage
 * @class
 *
 * @extends {Component}
 */
class Homepage extends Component {
  /**
   * render
   *
   * @name render
   * @function
   * @returns {jsx}
   */
  render() {
    return (
      <div className="homepage">
        <HorizontalSpacing />
        <CategoryNavSection />
        <HorizontalSpacing />
        <Catalogue {...this.props} />
        <HorizontalSpacing />
        <Popular 
          scrollDistance={392}
          title="Most Popular" 
          {...this.props} 
        />
        <HorizontalSpacing />
        <Featured />
        <HorizontalSpacing />
        <NewsLetter />
        <HorizontalSpacing />
      </div>
    );
  }
}

export default Homepage;
