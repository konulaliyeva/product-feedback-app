// import React, { useEffect } from "react";
// import { useRef, useState } from "react";
// import "./Dropdown.css";

// function Dropdown() {
//   const dropdownRef = useRef();
//   const [openDropwdown, setOpenDropdown] = useState(false);
//   const handleOpenDropdown = () => {
//     setOpenDropdown(!openDropwdown);
//   };

//   const [dropwdownList, setDropwdownList] = useState([
//     { id: 1, value: "Most Upvotes", isSelected: false },
//     { id: 2, value: "Least Upvotes", isSelected: false },
//     { id: 3, value: "Most Comments", isSelected: false },
//     { id: 4, value: "List Comments", isSelected: false },
//   ]);

//   useEffect(() => {
//     function handleOutsideClick(event) {
//       if (!dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(false);
//       }
//     }

//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   });

//   const handleSelectButton = (id) => {
//     let updatedList = dropwdownList.map((item) => {
//       if (item.id === id) {
//         return { ...item, isSelected: !item.isSelected };
//       }
//       return item;
//     });

//     setDropwdownList(updatedList);
//     setTimeout(() => setOpenDropdown(false), 100);
//   };

//   return (
//     <>
//       <div ref={dropdownRef} className="dropdown_container">
//         <div className="dropdown_select">
//           <span>Sort by:</span>
//           <button onClick={handleOpenDropdown} className="votes">
//             Most upvotes
//             <i
//               className={`mx-2 mt-1 fa-solid fa-angle-down ${
//                 openDropwdown ? "fa-angle-up" : ""
//               }`}
//             ></i>
//           </button>
//         </div>
//         <div
//           className={`dropdown_list ${
//             openDropwdown ? "openDrop" : "hideDrop"
//           } `}
//         >
//           {dropwdownList.map((listItem) => {
//             return (
//               <div key={listItem.id} className="btn_container pb-3">
//                 <button
//                   className="vote_btn"
//                   onClick={() => handleSelectButton(listItem.id)}
//                 >
//                   {listItem.value}
//                 </button>

//                 {listItem.isSelected && <i className="fa-solid fa-check mx-3"></i>}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dropdown;
