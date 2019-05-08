import React, { Component } from 'react';
import CategoryNavSection from "./CategoryNavSection";
import Catalogue from "./Catalogue";
import Popular from "../common/Popular";
import HorizontalSpacing from "../common/HorizontalSpacing";
import Featured from "../common/Featured";
import NewsLetter from "../common/NewsLetter";

import './index.css';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <HorizontalSpacing />
        <CategoryNavSection />
        <HorizontalSpacing />
        <Catalogue />
        <HorizontalSpacing />
        <Popular title="Most Popular" />
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
