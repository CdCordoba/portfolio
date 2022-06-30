import React from "react";
import "./styles.css";
export default function About() {
  return (
    <div>
      <h2 className="title">About Me</h2>
      <div
        className="about"
        data-aos="flip-up"
        data-aos-duration="1700"
        data-aos-offset="100"
      >
        <div className="about-intro">
          <p className="infoEmojis">
            - 🌏 &nbsp; I'm from Buenos Aires, Argentina. <br />- 🤔 &nbsp;
            Exploring new technologies and developing web applications.
            <br /> - 🎓 &nbsp; First year complete at Computer Science and Henry
            bootcamp complete.
            <br /> - 💼 &nbsp; Teaching Assistant at Henry Bootcamp.
            <br /> - 🌱 &nbsp; Learning more about Front-end technologies,
            design and UI/UX.
            <br />
          </p>
          <p className="infoP">
            But... why me? 🤔 I have no doubt that in the great community of
            programmers there are many talents, what I offer is professionalism
            and passion both for creating large-scale projects and for the group
            work that can be developed in them. I firmly believe that you get
            further by unleashing the potential of each one of us than just
            exploiting one's own.
          </p>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <h4
            className="title"
            style={{ textAlign: "left", fontSize: "30px", margin: "20px 5px" }}
          >
            Experiences 👀{" "}
          </h4>
          <p style={{ textAlign: "justify" }}>
            I was studying for 1 year and 6 months the career of computer
            Science and learning on my own, building my foundations and passion
            for programming. After this, I made the decision to do Henry's
            bootcamp in which I learned technologies such as Javascript, React,
            Express, etc. I used what I learned in individual and group projects
            using agile methodologies (scrum). - My first work experience was as
            a barber and teacher of this. Here I learned to manage a group of
            people and lead them to be the best version of themselves in the
            hairdressing profession. Later, during my time at Henry, I had the
            opportunity to be a teaching assistant where we also managed a group
            of students to guide them and help them give their best at this
            world 🌏 !
          </p>
          <h5
            className="title"
            style={{ fontSize: "20px", margin: "20px 5px" }}
          >
            If you are interested in my profile and you think we can work
            together, do not hesitate to contact me! 💬
          </h5>
        </div>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/christian-david-c%C3%B3rdoba-carlosama-435b65235"
            target="_blank"
            rel="noopener"
          >
            <img
              alt="LinkedIn"
              src="https://img.shields.io/badge/LinkedIn-Christian%20Cordoba-blue?style=flat-square&logo=linkedin"
            />
          </a>
          <a href="https://github.com/CdCordoba" target="_blank" rel="noopener">
            <img
              alt="GitHub"
              src="https://img.shields.io/badge/GitHub-cdCordoba-blue?style=flat-square&logo=github"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cd.cordoba13@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <img
              alt="Email"
              src="https://img.shields.io/badge/Email-cd.cordoba13@gmail.com-blue?style=flat-square&logo=gmail"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
