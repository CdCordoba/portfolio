import React from "react";
import "./styles.css";
const AOS = require("aos");

export default function Skills() {
  AOS.init();

  return (
    <div
      className="skills"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="100"
    >
      <div
        className="info"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-offset="300"
      >
        <h3>Tech Skills</h3>
        <p>
          These are the technologies I have experience with. My strenghs are
          CSS, JavaScript, LESS and React (those are my favourites). I'm a fast
          learner so I don't struggle with proyects with other languages.
        </p>
      </div>
      <div
        className="images"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-offset="300"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
          alt="HTML"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          alt="css"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/less-18-1175145.png"
          alt="less"
        />
        <img
          style={{ borderRadius: "10px" }}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="JavaScript"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
          alt="TypeScript"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="React"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
          alt="Node"
        />
        <img
          src="https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png"
          alt="express"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          alt="Python"
        />
        <img src="https://sequelize.org/img/logo.svg" alt="Sequelize" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
          alt="Postgre"
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/git-bash.svg"
          alt="Git"
        />
      </div>
    </div>
  );
}
