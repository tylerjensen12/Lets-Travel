import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import itinerary from "../pictures/itinerary.jpg";
import ncl from "../pictures/ncl-breakaway.jpg";
import TripCard from "../components/TripCard";

const DestScreen = () => {
  const [trip, setTrip] = useState([]);

  const getTrips = () => {
    axios
      .get("/api/gettrip")
      .then(res => setTrip(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getTrips();
  }, []);

  const tripDisplay = trip.map((trip, index) => {
    let id = trip.id;
    return <TripCard key={id} trip={trip} />;
  });

  Swal.fire({
    title: "Join A Future ParoDeeJay Cruise!",
    html: `Here's a list of future adventures we have plotted! These are not traditional "group cruises", but if you'd like to join one of these cruises, click the link above to submit a request for a quote, and I'll be glad to get you onboard!</br></br>Check out our "ParoDeeJay Shenanigans Squad" Facebook group or find us on the ShipMate app for the latest, greatest list of our upcoming adventures!!<a href="https://www.facebook.com/groups/parodeejay/" target="_blank" rel="noreferrer">
    Facebook: ParoDeeJay Shenanigans Squad</a>`,
    color: "#150a39",
    confirmButtonColor: "#7fe07f",
  });
  return (
    <div className="itinerary">
      <h1>Group Cruise - January 2023</h1>
      <div>
        <p>
          Join us for an epic group cruise aboard the Norwegian Breakaway on
          January 29, 2023! Organized by the fine folks at EECC Travels, La Lido
          Loca, Sharon At Sea, and Cruise With Josh, this Western Caribbean
          cruise out of New Orleans is guaranteed to be full of fun!!
        </p>
        <p>01/29/2023 New Orleans</p>
        <p>01/30/2023 Sea Day</p>
        <p>01/31/2023 Costa Maya, Mexico 11am-7pm</p>
        <p>02/01/2023 Harvest Caye (Private Island) 8am-6pm</p>
        <p>02/02/2023 Roatan, Honduras 8am-5pm</p>
        <p>02/03/2023 Cozumel, Mexico 9am-6pm</p>
        <p>02/04/2023 Sea Day</p>
        <p>02/05/2023 Disembarkation</p>
      </div>
      <div>
        <img src={itinerary} alt="" />
        <img src={ncl} alt="" />
      </div>
      <div>
        <p>
          The organizers are working on getting a hotel block for one or two
          days prior to the cruise to give us a chance to get a taste of New
          Orleans as well. We are NOT able to book you into this group
          ourselves, but if you contact either Alisa at EECC, Jenny at LLL,
          Sharon at SAST, or Josh Hocum, they can get you onboard!! :P
        </p>
        <p>Travel agents:</p>
        <p>Alisa Myatt (EECC Travels) alisa@eecctravels.com</p>
        <p>Jenny Barnette (La Lido Loca) jbarnette@cruiseshipcenters.com</p>
        <p>Sharon Asmus (Sharon at Sea) sharonatsea@gmail.com</p>
        <p>Josh Hocum (Cruise with Josh) josh@joshhocum.com</p>
      </div>
      <h1>Upcoming Cruises</h1>
      <div>{tripDisplay}</div>
    </div>
  );
};

export default DestScreen;
