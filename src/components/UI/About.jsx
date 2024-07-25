import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about-us.jpg"

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente vitae repellendus fuga impedit earum ullam atque deserunt.",
  },

  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente vitae repellendus fuga impedit earum ullam atque deserunt.",
  },

  {
    icon: "ri-customer-service-2-line",
    title: "24/7 hours support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente vitae repellendus fuga impedit earum ullam atque deserunt.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in helping clients in</h2>
            <h2 className="highlight"> growing their business</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              at dolorum cupiditate aspernatur excepturi commodi? Cupiditate
              aspernatur omnis natus quidem quaerat corporis fugit aliquid
              distinctio assumenda, explicabo modi!
            </p>

            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
