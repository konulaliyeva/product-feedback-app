import React from "react";
import Button from "../../components/Utils/Button";
import styles from "./EmptyPage.module.css";
function EmptyPageBody() {
  return (
    <div className={styles["empty-container"]}>
     <div className={styles["empty-content"]}>
     <div className={styles["empty-img"]}>
        <img src="../suggestions/illustration-empty.svg" alt="" />
      </div>
      <div className={styles["empty-texts"]}>
        <h3>There is no feedback yet.</h3>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <Button className={styles["btn"]}>+Add Feedback</Button>
     </div>
    </div>
  );
}

export default EmptyPageBody;
