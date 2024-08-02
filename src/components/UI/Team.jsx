import React from "react";
import "../../styles/team.css";

import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Harry Carter",
    position: "Product Developer",
  },
  {
    imgUrl: team02,
    name: "Sarah James",
    position: "Front-End Developer",
  },
  {
    imgUrl: team03,
    name: "Emma Watson",
    position: "Product Designer",
  },
  {
    imgUrl: team04,
    name: "John Cena ",
    position: "CEO & Sr. Developer",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <a
                    href="https://www.linkedin.com/in/iameenalam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i class="ri-linkedin-line"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/iameenalam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i class="ri-facebook-fill"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
