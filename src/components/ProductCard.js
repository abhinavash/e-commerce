import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="product" />
          <img src="images/watch-04.jpg" alt="product2" />
        </div>
        <div className="product-deatails">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk `0 pack multi colored for student
          </h5>
          <ReactStars
            count={5}
            value={3}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="addCart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
