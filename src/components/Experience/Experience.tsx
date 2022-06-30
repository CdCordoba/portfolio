import React from "react";
import bookstore from "./source/Bookstore.png";
import henryfood from "./source/HenryFood.png";
import musicFestival from "./source/musicFestival.png";
import coffeBlog from "./source/coffeBlog.png";
import {
  SiJavascript,
  SiRedux,
  SiLess,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import "aos/dist/aos.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiGulp } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import "./styles.css";
const AOS = require("aos");

export default function Experience() {
  AOS.init();
  return (
    <div className="proyects">
      <h2 className="title">Projects</h2>
      <div
        className="proyects__container"
        data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-offset="100"
      >
        <div className="row row-cols-1 row-cols-md-2 g-4 cards">
          <div className="col">
            <div className="card">
              <img src={bookstore} className="card-img-top" alt="Bookstore" />
              <div className="card-body">
                <h5 className="card-title">Bookstore</h5>
                <div className="card-text">
                  <p>
                    E-commerce of books in which as a guest you can add products
                    to the cart and as a user you can register an email, or log
                    in with Google to buy and add books to favorites. It also
                    has an admin view where you can control users, sales, stock,
                    etc.
                  </p>
                  <a
                    href="https://bookstore-lyart-six.vercel.app"
                    target="_blank"
                  >
                    <button>Go to website</button>
                  </a>
                </div>
                <p>
                  <SiJavascript size={40} /> <AiFillHtml5 size={40} />{" "}
                  <DiCss3 size={40} /> <SiLess size={40} />{" "}
                  <FaReact size={40} /> <SiRedux size={40} />{" "}
                  <SiExpress size={40} /> <SiPostgresql size={40} />.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={henryfood} className="card-img-top" alt="henryFood" />
              <div className="card-body">
                <h5 className="card-title">Henry Food</h5>
                <div className="card-text">
                  <p>
                    Henry Food is a food blog where we can search for different
                    recipes by diet, name or score. It was made for the lab
                    period at Henry's bootcamp.
                  </p>
                  <a href="https://henryfood-alpha.vercel.app/" target="_blank">
                    <button>Go to website</button>
                  </a>
                </div>
                <p>
                  <SiJavascript size={40} /> <AiFillHtml5 size={40} />{" "}
                  <DiCss3 size={40} /> <SiLess size={40} />{" "}
                  <FaReact size={40} /> <SiRedux size={40} />{" "}
                  <SiExpress size={40} /> <SiPostgresql size={40} />.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={musicFestival}
                className="card-img-top"
                alt="music festival"
              />
              <div className="card-body">
                <h5 className="card-title">Music Festival</h5>
                <div className="card-text">
                  <p>
                    Music Festival is a page to see the line up of a concert
                    that shows a gallery and ticket information. The application
                    is fully responsive.
                  </p>
                  <a
                    href="https://music-festival-blond.vercel.app"
                    target="_blank"
                  >
                    <button>Go to website</button>
                  </a>
                </div>
                <p>
                  <SiJavascript size={40} /> <AiFillHtml5 size={40} />
                  <DiCss3 size={40} /> <DiSass size={40} /> and
                  <DiGulp size={40} />.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={coffeBlog} className="card-img-top" alt="coffeBlog" />
              <div className="card-body">
                <h5 className="card-title">Coffe Blog</h5>
                <div className="card-text">
                  <p>
                    Coffee Blog is a mockup for a Coffee blog, the page is fully
                    responsive.
                  </p>
                  <a href="https://coffee-blog-nu.vercel.app" target="_blank">
                    <button>Go to website</button>
                  </a>
                </div>

                <p>
                  <SiJavascript size={40} /> <AiFillHtml5 size={40} />
                  <DiCss3 size={40} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
