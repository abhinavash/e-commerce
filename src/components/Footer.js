import React from "react";
import { Link } from "react-router-dom";
import {BsLinkedin,BsYoutube,BsGithub,BsFacebook} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address.."
                  aria-label="Your Email Address.."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white">1228 Dlf my pad B2 Gomti Nagar <br/> Lucknow U.P <br/> Pin Code : 226016
                </address>
                <Link href="tel: +91 1231231231" className="mt-3 d-block mb-1 text-white">
                  +91 1231231231
                </Link>
                <Link href="mailto:abhinava@observancegroup.com" className="mt-2 d-block mb-0 text-white">
                  abhinava@observsergroup.com
                </Link>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <Link className="text-white" href="">
                   <BsLinkedin className="fs-4"/>
                  </Link>
                  <Link className="text-white" href="">
                    <BsYoutube className="fs-4"/>
                  </Link>
                  <Link className="text-white" href="">
                    <BsGithub className="fs-4"/>
                  </Link>
                  <Link className="text-white" href="">
                    <BsFacebook className="fs-4"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Link</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Obs
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
