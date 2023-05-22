import React from "react";
import styles from "./EmptyContent.module.css";

const EmptyContent = () => {
  return (
    <tr className={styles.empty__content__wrapper}>
      <td colSpan={5}>
        <p className={styles.text}>You have not made any order yet</p>
      </td>
    </tr>
  );
};

export default EmptyContent;
