import React from "react";
import style from './TripCard.module.css'

const TripCard = ({ trip }) => {
  return (
    <div className={style.trip_card}>
      <ul className={style.trip}>
        <li>{trip.date}</li>
        <li>{trip.ship}</li>
        <li>{trip.length} days</li>
        <li>{trip.place}</li>
      </ul>
    </div>
  );
};

export default TripCard