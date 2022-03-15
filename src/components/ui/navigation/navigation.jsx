import React from "react";
import {loginRecords} from "../../../api/index";

const Navigation = () => {
  console.log(loginRecords())
  return (
    <nav
      className="fancynavbar fancynavbar-expand-lg"
      data-zanim-lg='{"from":{"opacity":1,"x":70},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.3}'
      data-zanim-xs='{"from":{"opacity":1,"y":-37},"to":{"opacity":1,"y":0},"ease":"CubicBezier","duration":0.8,"delay":0.3}'
      data-exclusive="true"
      style={{ transform: "translate(0px, 0px)", opacity: 1 }}
    >
      <div className="fancynavbar-togglerbar bg-black">
        <a
          className="fancynavbar-brand"
          href=" /twbs-sparrow/v2.0.2/index.html"
        >
          <img
            className="fancynavbar-brand-img"
            src="./logo-sparrow-invert.svg"
            alt=""
            width={30}
            height={30}
            data-zanim-lg='{"from":{"opacity":0,"x":45},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.4}'
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          />
        </a>
        <div className="fancynavbar-toggler">
          <svg
            className="fancynavbar-toggler-icon"
            viewBox="0 0 70 70"
            xmlns="http://www.w3.org/2000/svg"
            data-zanim-lg='{"from":{"opacity":0,"x":45},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.5}'
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          >
            <path
              id="path-top"
              d="M20,25c0,0,22,0,30,0c16,0,18.89,40.71-.15,21.75C38.7,35.65,19.9,16.8,19.9,16.8"
              style={{ strokeDasharray: "30px, 88px", strokeDashoffset: 0 }}
            />
            <path
              id="path-middle"
              d="M20,32h30"
              style={{ strokeDasharray: "30px, 30px", strokeDashoffset: 0 }}
            />
            <path
              id="path-bottom"
              d="M19.9,46.98c0,0,18.8-18.85,29.95-29.95C68.89-1.92,66,38.78,50,38.78c-8,0-30,0-30,0"
              style={{
                strokeDasharray: "30px, 88.1px",
                strokeDashoffset: "-88px",
              }}
            />
          </svg>
        </div>
        <div
          className="fancynavbar-addon"
          data-zanim-lg='{"from":{"opacity":1,"x":45},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.4}'
          style={{ transform: "translate(0px, 0px)", opacity: 1 }}
        >
          <a className="fancynavbar-addon-item" href=" /twbs-sparrow/v2.0.2/#!">
            <svg
              className="svg-inline--fa fa-twitter fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </a>
          <a
            className="fancynavbar-addon-item"
            href=" /twbs-sparrow/v2.0.2/#languageModal"
            data-bs-toggle="modal"
          >
            <span className="font-sans-serif ls fw-black fs--1 d-block">
              EN
            </span>
          </a>
        </div>
      </div>
      <div
        className="fancynavbar-collapse"
        style={{ transform: "translate(100%, 0px)" }}
      >
        <ul className="fancynavbar-nav">
          <li
            className="fancynav-item fancy-dropdown"
            style={{ height: "55px" }}
          >
            <a
              className="fancynav-link fancy-dropdown-toggle"
              href="JavaScript:void(0)"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <span className="fancynav-link-content">homes</span>
            </a>
            <div
              className="fancy-dropdown-menu"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <div className="row pb-4 pt-3">
                <div className="col-auto">
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/default.html"
                  >
                    {" "}
                    Default
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/bicycle.html"
                  >
                    {" "}
                    Bicycle
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/bigcartel.html"
                  >
                    {" "}
                    Bigcartel
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/cafe.html"
                  >
                    {" "}
                    Cafe
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/digital.html"
                  >
                    {" "}
                    Digital
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/ecommerce.html"
                  >
                    {" "}
                    Ecommerce
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/event.html"
                  >
                    {" "}
                    Event
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/interior.html"
                  >
                    {" "}
                    Interior
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/landing.html"
                  >
                    {" "}
                    Landing
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/promotion.html"
                  >
                    {" "}
                    Promotion
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/software.html"
                  >
                    {" "}
                    Software
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/homes/studio.html"
                  >
                    {" "}
                    Studio
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            className="fancynav-item fancy-dropdown"
            style={{ height: "55px" }}
          >
            <a
              className="fancynav-link fancy-dropdown-toggle"
              href="JavaScript:void(0)"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <span className="fancynav-link-content">pages</span>
            </a>
            <div
              className="fancy-dropdown-menu"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <div className="row pb-4 pt-3">
                <div className="col-sm-auto pe-4">
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/404.html"
                  >
                    {" "}
                    404
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/about.html"
                  >
                    {" "}
                    About
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/blog.html"
                  >
                    {" "}
                    Blog
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/blog-single.html"
                  >
                    {" "}
                    Blog single
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/cart.html"
                  >
                    {" "}
                    Cart
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/casestudy.html"
                  >
                    {" "}
                    Casestudy
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/coming-soon.html"
                  >
                    {" "}
                    Coming soon
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/contact.html"
                  >
                    {" "}
                    Contact
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/one-page.html"
                  >
                    {" "}
                    One page
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/portfolio.html"
                  >
                    {" "}
                    Portfolio
                  </a>
                </div>
                <div className="col-sm-auto pe-4">
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/profile.html"
                  >
                    {" "}
                    Profile
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/rtl.html"
                  >
                    {" "}
                    RTL
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/services.html"
                  >
                    {" "}
                    Services
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/shop.html"
                  >
                    {" "}
                    Shop
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/signin.html"
                  >
                    {" "}
                    Signin
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/signup.html"
                  >
                    {" "}
                    Signup
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/product-single.html"
                  >
                    {" "}
                    Product single
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/split-static.html"
                  >
                    {" "}
                    Split static
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/split-youtube.html"
                  >
                    {" "}
                    Split youtube
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/pages/starter.html"
                  >
                    {" "}
                    Starter
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            className="fancynav-item fancy-dropdown"
            style={{ height: "55px" }}
          >
            <a
              className="fancynav-link fancy-dropdown-toggle"
              href="JavaScript:void(0)"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <span className="fancynav-link-content">components</span>
            </a>
            <div
              className="fancy-dropdown-menu"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <div className="row pb-2 pt-3">
                <div className="col-sm-auto mb-3">
                  <div className="row">
                    <div className="col-sm-auto pe-4">
                      <a
                        className="fancy-dropdown-item text-white fw-black ls text-uppercase fs--1 mb-1"
                        href="JavaScript:void(0)"
                      >
                        Sparrow
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/accordion.html"
                      >
                        {" "}
                        Accordion
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/anchor.html"
                      >
                        {" "}
                        Anchor
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/backgrounds.html"
                      >
                        {" "}
                        Backgrounds
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/borders.html"
                      >
                        {" "}
                        Borders
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/carousel.html"
                      >
                        {" "}
                        Carousel
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/colors.html"
                      >
                        {" "}
                        Colors
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/cookie-notice.html"
                      >
                        {" "}
                        Cookie notice
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/countdown.html"
                      >
                        {" "}
                        Countdown
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/countup.html"
                      >
                        {" "}
                        Countup
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/fancynav.html"
                      >
                        {" "}
                        Fancynav
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/filter.html"
                      >
                        {" "}
                        Filter
                      </a>
                    </div>
                    <div className="col-sm-auto pe-4">
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/googlemap.html"
                      >
                        {" "}
                        Googlemap
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/icons.html"
                      >
                        {" "}
                        Icons
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/inline-player.html"
                      >
                        {" "}
                        Inline player
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/lightbox.html"
                      >
                        {" "}
                        Lightbox
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/masonry.html"
                      >
                        {" "}
                        Masonry
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/parallax.html"
                      >
                        {" "}
                        Parallax
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/progressbar.html"
                      >
                        {" "}
                        Progressbar
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/spacing.html"
                      >
                        {" "}
                        Spacing
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/typed-text.html"
                      >
                        {" "}
                        Typed text
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/typography.html"
                      >
                        {" "}
                        Typography
                      </a>
                      <a
                        className=" false fancy-dropdown-item"
                        href=" /twbs-sparrow/v2.0.2/components/sparrow/zanimation.html"
                      >
                        {" "}
                        Zanimation
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto pe-3 mb-3">
                  <a
                    className="fancy-dropdown-item text-white fw-black ls text-uppercase fs--1 mb-1"
                    href="JavaScript:void(0)"
                  >
                    Bootstrap
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/badges.html"
                  >
                    {" "}
                    Badges
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/buttons.html"
                  >
                    {" "}
                    Buttons
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/cards.html"
                  >
                    {" "}
                    Cards
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/forms.html"
                  >
                    {" "}
                    Forms
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/modals.html"
                  >
                    {" "}
                    Modals
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/navbar.html"
                  >
                    {" "}
                    Navbar
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/scrollspy.html"
                  >
                    {" "}
                    Scrollspy
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/sizing.html"
                  >
                    {" "}
                    Sizing
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/tables.html"
                  >
                    {" "}
                    Tables
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/tabs.html"
                  >
                    {" "}
                    Tabs
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/components/bootstrap/tooltips.html"
                  >
                    {" "}
                    Tooltips
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            className="fancynav-item fancy-dropdown"
            style={{ height: "55px" }}
          >
            <a
              className="fancynav-link fancy-dropdown-toggle"
              href="JavaScript:void(0)"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <span className="fancynav-link-content">documentation</span>
            </a>
            <div
              className="fancy-dropdown-menu"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <div className="row pb-4 pt-3">
                <div className="col-auto">
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/documentation/getting-started.html"
                  >
                    {" "}
                    Getting started
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/documentation/file-structure.html"
                  >
                    {" "}
                    File structure
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/documentation/customization.html"
                  >
                    {" "}
                    Customization
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/documentation/gulp.html"
                  >
                    {" "}
                    Gulp
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/documentation/rtl.html"
                  >
                    {" "}
                    RTL
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/documentation/plugins.html"
                  >
                    {" "}
                    Plugins
                  </a>
                  <a
                    className=" false fancy-dropdown-item"
                    href=" /twbs-sparrow/v2.0.2/documentation/changelog.html"
                  >
                    {" "}
                    Changelog
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="fancynav-item">
            <a
              className="fancynav-link"
              href=" /twbs-sparrow/v2.0.2/pages/portfolio.html"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <span className="fancynav-link-content">portfolio</span>
            </a>
          </li>
          <li className="fancynav-item">
            <a
              className="fancynav-link"
              href=" /twbs-sparrow/v2.0.2/pages/contact.html"
              style={{ opacity: 0, transform: "translate(0px, 56px)" }}
            >
              <span className="fancynav-link-content">contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
