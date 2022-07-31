import React from "react";
import { useRef, useState } from "react";
import "./Dropdown.css";
function Dropdown() {
  const dropdownRef = useRef();
  const [openDropwdown, setOpenDropdown] = useState(false);
  const [checkmark, setCheckmark] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropwdown);
  };
  const dropwdownList = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "List Comments",
  ];
  useState(() => {
    function handleOutsideClick(event) {
      if (!dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  const handleSelectButton = (index) => {
   console.log(index);
    setCheckmark(!checkmark);
  };
 
  return (
    <>
      <div ref={dropdownRef} className="dropdown_container">
        <div className="dropdown_select">
          <span>Sort by:</span>
          <button onClick={handleOpenDropdown} className="votes">
            Most upvotes
            <i
              className={`mx-2 mt-1 fa-solid fa-angle-down ${
                openDropwdown ? "fa-angle-up" : ""
              }`}
            ></i>
          </button>
        </div>
        <div
          className={`dropdown_list ${
            openDropwdown ? "openDrop" : "hideDrop"
          } `}
        >
          {dropwdownList.map((listItem, index) => {
            return (
              <div key={index} className="btn_container pb-3">
                <button
                  className="vote_btn"
                  onClick={() => handleSelectButton(index)}
                >
                  {listItem}
                </button>
                <i className="fa-solid fa-check mx-3"></i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
