import React, { useEffect, useRef, useState } from "react";
import "../../styles/counter.css";
import CountUp from "react-countup";

const counterData = [
  {
    number: 900,
    text: "Clients",
  },
  {
    number: 110,
    text: "Running Projects",
  },
  {
    number: 500,
    text: "Projects Completed",
  },
];

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="counter" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <div className="counter__item" key={index}>
              <h3 className="counter__number">
                {isVisible && (
                  <CountUp end={item.number} duration={5} delay={1} />
                )}
                +
              </h3>
              <h4 className="counter__title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
