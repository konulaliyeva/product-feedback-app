import React from "react";
import "./Category.css";

function Category() {
  return (
    <div className="category_board px-3 py-3 pb-5">
      <div className="d-flex">
        <button className="active catg_btn mx-2 mb-3">All</button>
        <button className="catg_btn mx-2 mb-3">UI</button>
        <button className="catg_btn mx-2 mb-3">UX</button>
      </div>
      <div className="d-flex">
      <button className="catg_btn mx-2 mb-3">Bug</button>
      <button className="catg_btn mx-2 mb-3">Enhancement</button>
      </div>
      <button className="catg_btn mx-2 mb-3">Feature</button>
    </div>
  );
}

export default Category;
