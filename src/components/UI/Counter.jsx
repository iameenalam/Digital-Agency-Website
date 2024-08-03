import React, { useEffect, useRef, useState } from "react";
import "../../styles/counter.css";
import CountUp from "react-countup";

const counterData = [
  {
    number: 2000,
    text: "Clients",
  },
  {
    number: 350,
    text: "Running Projects",
  },
  {
    number: 900,
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
    <section className="counter" ref={sectionRef}>
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <div className="counter__item" key={index}>
              <h3 className="counter__number">
                {isVisible && (
                  <CountUp end={item.number} duration={4} delay={0.5} />
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
