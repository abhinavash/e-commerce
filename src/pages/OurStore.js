import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
    const [grid, setGrid] = useState(4)
    alert(grid);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <div className="filter-title">Shop By Category</div>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Mobile</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <div className="filter-title">Filter By</div>
                <div>
                  <h5 className="sub-title">Availiblity</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Out of Stock (0)
                    </label>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-15">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label HtmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label HtmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Color</h5>
                  <div>
                    <ul className="colors p-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        S (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        M (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <div className="filter-title">Product Tags</div>
                <h5 className="sub-title">Tags</h5>
                <div>
                  <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded 3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded 3 py-2 px-3">
                      Tv
                    </span>
                    <span className="badge bg-light text-secondary rounded 3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded 3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded 3 py-2 px-3">
                      Headphone
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <div className="filter-title">Random</div>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Smart watch for men calling , amoled display ..</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Smart watch for men calling , amoled display ..</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4
                ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{width:'100px'}}>Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="">Low to High</option>
                      <option value="">High to Low</option>
                      <option value="">To Rated</option>
                      <option value="">Latest one</option>
                      <option value="">Best Selling</option>
                      <option value="">Alphabetically A to Z</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="products mb-0">10 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={()=>{setGrid(4)}}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={()=>{setGrid(3)}}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={()=>{setGrid(2)}}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={()=>{setGrid(1)}}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                    <ProductCard grid={grid}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
