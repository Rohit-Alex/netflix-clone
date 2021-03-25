import React, { useEffect, useState } from "react";
import "./style.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setShow(true);
      else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* means the upper div section will always have "nav" class but when show is true "nav_black" will be appended to it */}
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKhpHp5_eKFpXV1dZe8UF2rp-NgVcgt1pOA&usqp=CAU"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;
