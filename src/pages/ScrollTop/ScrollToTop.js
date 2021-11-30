import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const btnStyle = {
    color: "#464b86",
    border: "1px solid #464b86",
    borderRadius: "50%",
    padding: ".5rem",
    width: "110%",
  };

  return (
    <div
      className="scroll-to-top"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        cursor: "pointer",
        zIndex: "2",
      }}
    >
      {isVisible && (
        <div onClick={scrollToTop} className="top-icon">
          <i className="fas fa-arrow-up fa-2x" style={btnStyle}></i>
        </div>
      )}
    </div>
  );
}
