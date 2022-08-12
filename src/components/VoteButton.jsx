import React, { useState } from "react";
import "./VoteButton.css";
import classNames from "classnames";

function VoteButton({ count, onDecrement, onIncrement }) {
  const [voted, setVoted] = useState(false);

  const buttonClasses = classNames("number", {
    voted: voted,
    unvoted: !voted,
  });
  function handleClick() {
    if (voted) {
      onDecrement();
    } else {
      onIncrement();
    }
    setVoted((v) => !v);
  }

  return (
    <button className={buttonClasses} onClick={handleClick}>
      <i className="fa-solid fa-angle-up"></i>
      {count}
    </button>
  );
}

export default VoteButton;
