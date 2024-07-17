import React from "react";
import "../../styles/counter.css";
import CountUp from "react-countup"

const counterData = [
    {
        number: 100,
        text: 'Clients'
    },
    {
        number: 6,
        text: 'Running Projects'
    },
    {
        number: 60,
        text: 'Projects Completed'
    },
]

const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
        {
            counterData.map((item,index)=>(
              <div className="counter__item" key={index}>
              <h3 className="counter__number">
                <CountUp
                  end={item.number}
                  duration={5}
                  delay={2}
                />+
              </h3>
              <h4 className="counter__title">{item.text}</h4>
          </div>

            ))
        }
        </div>
      </div>
    </section>
  );
};

export default Counter;
