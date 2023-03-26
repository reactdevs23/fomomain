import React, { useState } from "react";
import styles from "./styles.module.css";
const BuyMagazine = () => {
  const [yearly, setYearly] = useState(false);
  const quaterlyPricing = [
    {
      title: "Starter",
      youWillGet: ["Get 3 Physical Magazine", "Free Digital Copy "],
      price: 1.2,
      to: "https://www.hel.io/x/FOMOmag1",
    },
    {
      recomended: true,
      title: "Pro",
      youWillGet: [
        "Get 3 Physical Magazine ",
        "Free Digital Copy",
        "Wall hanging NFT Poster",
      ],
      price: 1.5,
      to: "https://www.hel.io/x/FOMOmag1",
    },
    {
      title: "Professional",
      youWillGet: [
        "Get 3 Physical Magazine",
        "Free Digital Copy",
        "Wall hanging NFT Poster",
        "1/1 ART copy",
      ],
      price: 1.8,
      to: "https://www.hel.io/x/FOMOmag1",
    },
  ];
  const yearlyPricing = [
    {
      title: "Starter",
      youWillGet: ["Get 3 Physical Magazine", "Free Digital Copy "],
      price: 2.2,
      to: "https://www.hel.io/x/FOMOmag1",
    },
    {
      recomended: true,
      title: "Pro",
      youWillGet: [
        "Get 3 Physical Magazine ",
        "Free Digital Copy",
        "Wall hanging NFT Poster",
      ],
      price: 3.5,
      to: "https://www.hel.io/x/FOMOmag1",
    },

    {
      title: "LifeTime",
      youWillGet: [
        "Get 3 Physical Magazine",
        "Free Digital Copy",
        "Wall hanging NFT Poster",
        "1/1 ART copy",
      ],
      price: 10.8,
      to: "https://www.hel.io/x/FOMOmag1",
    },
  ];

  const [pricing, setPricing] = useState(quaterlyPricing);

  return (
    <div className={styles.pricingContainer}>
      <div className={`${styles.wrapper} container`}>
        <h3 className={styles.heading}>
          We offer great <span className={styles.color}>price</span> plan for
          the fomo magazine
        </h3>
        <div className={styles.timePeriods}>
          <div
            className={`${styles.timePeriod} ${!yearly && styles.activePeriod}`}
            onClick={() => {
              setYearly(false);
              setPricing(quaterlyPricing);
            }}
          >
            <span className={styles.timePeriodtext}>Quarterly</span>
          </div>{" "}
          <div
            className={`${styles.timePeriod} ${yearly && styles.activePeriod}`}
            onClick={() => {
              setYearly(true);
              setPricing(yearlyPricing);
            }}
          >
            <span className={styles.timePeriodtext}>Yearly</span>
          </div>
          <p className={styles.save}>SAVE UP TO 55%</p>
        </div>

        <div className={`${styles.cardWrapper} `}>
          {pricing.map((el, i) => (
            <div
              key={i}
              className={`${styles.card} ${
                el.recomended && styles.recomendedCard
              }`}
            >
              {el.recomended && (
                <div className={styles.recomended}>
                  <span className={styles.recomendedText}> Recommended</span>
                </div>
              )}

              <div className={styles.titleAndText}>
                <h4 className={styles.title}>{el.title}</h4>

                <div className={styles.whatWillYOuGet}>
                  {el.youWillGet.map((item, i) => (
                    <li className={styles.text} key={i}>
                      {item}
                    </li>
                  ))}
                </div>
              </div>

              <div className={styles.buttonAndPrice}>
                <h5 className={styles.price}>{el.price} SOL</h5>
                <a
                  href={el.to}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.button}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyMagazine;
