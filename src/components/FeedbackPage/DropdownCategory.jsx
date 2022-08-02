import React from "react";
import { useRef, useState } from "react";
import "./DropdownCategory.css";
function DropdownCategory() {
  const dropdownRef = useRef();
  const [openDropwdown, setOpenDropdown] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropwdown);
  };
  const [selectedValue, setSelectedValue] = useState("");
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

  const [dropwdownList, setDropwdownList] = useState([
    { id: 1, value: "UI", isSelected: false },
    { id: 2, value: "UX", isSelected: false },
    { id: 3, value: "Enhancement", isSelected: false },
    { id: 4, value: "Feature", isSelected: false },
    { id: 5, value: "Bug", isSelected: false },
  ]);

  const handleSelectButton = (id) => {
    let selectedValue;
    let updatedList = dropwdownList.map((listItem) => {
      if (listItem.id === id) {
         selectedValue = listItem.value;
        return { ...listItem, isSelected: !listItem.isSelected };
      }
      return listItem;
    });
    setDropwdownList(updatedList);
    setSelectedValue(selectedValue);
    setTimeout(()=>setOpenDropdown(false), 100);
    setTimeout(()=>setDropwdownList(dropwdownList), 120);

  };
  return (
    <>
      <div ref={dropdownRef} className="dropdown_feedback">
        <button onClick={handleOpenDropdown} className="votes_feedback">
          <div className="mx-3">{selectedValue}</div>
          <i
            className={`fa-solid fa-angle-down ${
              openDropwdown ? "fa-angle-up" : ""
            }`}
          ></i>
        </button>
        <div
          className={`dropdown_list_feedback ${
            openDropwdown ? "openDrop" : "hideDrop"
          } `}
        >
          {dropwdownList.map((listItem) => {
            return (
              <div key={listItem.id} className="btn_container pb-3">
                <button
                  className="vote_btn"
                  onClick={() => handleSelectButton(listItem.id)}
                >
                  {listItem.value}
                </button>

                {listItem.isSelected && (
                  <i className="fa-solid fa-check mx-3"></i>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DropdownCategory;
