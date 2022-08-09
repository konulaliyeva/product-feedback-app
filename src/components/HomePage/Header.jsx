import { React, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Dropdown from "../Utils/Dropdown";
import Button from "../Utils/Button";

const dropdownOptions = [
  "Most upvotes",
  "Least upvotes",
  "Most comments",
  "Least comments",
];

function Header() {
  const [buttonText, setButtonText] = useState("Most Upvotes");

  function handleChange(option) {
    setButtonText(option);
  }

  return (
    <div className="header_container">
      <div className="header_left">
        <i className="fas fa-lightbulb"></i>
        <p className="suggestions">6 Suggetions</p>

        <div className="header-catg">
          <span>Sort by:</span>
          <Dropdown
            options={dropdownOptions}
            onChange={handleChange}
            trigger={({ handleClick }) => (
              <Button color="transparent" onClick={handleClick}>{buttonText}</Button>
            )}
          />
        </div>
      </div>
      <div className="header_right">
        <Link to="/feedback">
          <Button color="purple">+Add Feedback</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
