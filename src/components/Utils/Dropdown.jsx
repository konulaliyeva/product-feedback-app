import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import classes from "./Dropdown.module.css";

function Dropdown({
  options = [],
  trigger,
  initialValue,
  initiallyOpen = false,
  onChange,
  width
}) {
  const dropdownRef = useRef();
  const [isOpen, setOpen] = useState(initiallyOpen);
  const [selectedOption, setSelectedOption] = useState(initialValue);
  


  const contentClassName = classNames(classes.Dropdown__content, {
    [classes["Dropdown__content--open"]]: isOpen,
    [classes['Dropdown--width']]: width === 'lg',

  });

  function handleClick() {
    setOpen((open) => !open);
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    onChange && onChange(option);
    setOpen(false);
  }

  function handleKeyUp(event, option) {
    if (event.key === "Enter") {
      setSelectedOption(option);
      onChange && onChange(option);
      setOpen(false);
    }
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      const dropdown = dropdownRef.current;
      if (!dropdown.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={classes.Dropdown}>
      {trigger({ handleClick })}
      <ul className={contentClassName}>
        {options.map((option, index) => (
          <li
            key={index}
            tabIndex={0}
            onClick={() => handleOptionClick(option)}
            onKeyUp={(event) => handleKeyUp(event, option)}
            className={classNames({
              [classes["Option--selected"]]: option === selectedOption,
            })}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
