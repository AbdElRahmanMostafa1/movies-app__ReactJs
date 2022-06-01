import React from "react";
import styles from "./rating.module.css";
import { Icon } from "@iconify/react";

const Rating = ({ rate, reviewsNum }) => {
  const approximatedRate = Math.round(rate) / 2;
  return (
    <span className={styles.ratingContainer}>
      <span className={styles.starsContainer}>
        <Icon
          icon={
            approximatedRate < 0.5
              ? `akar-icons:star`
              : approximatedRate === 0.5
              ? `bxs:star-half`
              : `bxs:star`
          }
        />
        <Icon
          icon={
            approximatedRate < 1.5
              ? `akar-icons:star`
              : approximatedRate === 1.5
              ? `bxs:star-half`
              : `bxs:star`
          }
        />
        <Icon
          icon={
            approximatedRate < 2.5
              ? `akar-icons:star`
              : approximatedRate === 2.5
              ? `bxs:star-half`
              : `bxs:star`
          }
        />
        <Icon
          icon={
            approximatedRate < 3.5
              ? `akar-icons:star`
              : approximatedRate === 3.5
              ? `bxs:star-half`
              : `bxs:star`
          }
        />
        <Icon
          icon={
            approximatedRate < 4.5
              ? `akar-icons:star`
              : approximatedRate > 4.5 && approximatedRate < 5
              ? `bxs:star-half`
              : `bxs:star`
          }
        />
      </span>
      {reviewsNum && (
        <span className="reviews-num"> {reviewsNum} reviews </span>
      )}
    </span>
  );
};

export default Rating;
