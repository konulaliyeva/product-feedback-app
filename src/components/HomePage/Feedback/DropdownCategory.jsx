import React from "react";
import { useRef, useState } from "react";
import "./DropdownCategory.css";
function DropdownCategory() {
  const dropdownRef = useRef();
  const [openDropwdown, setOpenDropdown] = useState(false);
  const [checkmark, setCheckmark] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropwdown);
  };

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

  const handleSelectButton = () => {

    setCheckmark(!checkmark);
  };
  const dropwdownList = [
    "UI", "UX", "Feature", "Enhancement", "Bug"
  ];
  return (
    <>
      <div ref={dropdownRef} className="dropdown_feedback">

          <button onClick={handleOpenDropdown} className="votes_feedback">
            <i
              className={`fa-solid fa-angle-down ${openDropwdown ? "fa-angle-up" : ""}`}
            ></i>
          </button>{" "}
        <div
          className={`dropdown_list_feedback ${
            openDropwdown ? "openDrop" : "hideDrop"
          } `}
        >
          {dropwdownList.map((listItem, index) => {
            return (
              <div key = {index} className="btn_container pb-3">
                <button className="vote_btn" onClick={()=>handleSelectButton(index)}>
                  {listItem}
                </button>
                <i
                  className={`fa-solid fa-check mx-3 ${
                    checkmark ? "show-check" : ""
                  }`}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DropdownCategory;
