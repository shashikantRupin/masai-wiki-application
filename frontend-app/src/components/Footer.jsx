import React, { useEffect, useState } from "react";
import styles from "../style/footer.module.css";

const Footer = () => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", 
      day: "2-digit",
    });
    setTime(formattedDate);
  };

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <div className={styles.footerContainer}>
      <div className={styles.timeContainer}>{time}</div>
    </div>
  );
};

export default Footer;
