import React from "react";
import Swal from "sweetalert2";
import turtle from "../pictures/dee-lightful-destinations.jpg";
import dee from "../pictures/dee-profile.jpg";

const TravelScreen = () => {
  Swal.fire({
    html: `<h2>I am currently not accepting new clients, but hope to reopen soon!</h2></br>
  <h5>Current clients: PLEASE feel free to contact me with any needs during this time!! ~Dee</h5></br>
  <p>If you'd like to transfer a booked cruise to my agency, I'm happy to help! If it was booked within the last 90 days for Carnival or 30 days for most other cruise lines and is not paid in full, message the <a href="https://www.facebook.com/parodeejay" target="_blank" rel="noreferrer">ParoDeeJay Facebook page</a> and I'll be glad to start the process!</p>`,
    confirmButtonColor: "#7fe07f",
    color: "#150a39",
  });
  return (
    <div>
      <div className="travel">
        <h1>Dee-Lightful Destinations</h1>
        <img src={turtle} alt="turtle" />
      </div>
      <div className="info">
        <h3>Welcome to your next amazing adventure!</h3>
        <div className="intro">
          <img src={dee} alt="" />
          <p>
            My name is Dee, and I'm a planner. If you've seen our adventures on
            YouTube, you probably know that one of my favorite parts of
            traveling is researching exciting new places to visit and seeking
            out unique adventures in each destination. I'm eager to learn what
            you want from your vacation so that I can go to work for you,
            finding deals and packages to help you create memories to last a
            lifetime. Let's start planning together!! ~Dee
          </p>
        </div>
        <h3>What types of things do I book?</h3>
        <p>
          I have chosen to specialize in cruises and cruisetours, as that is my
          primary method of vacationing and the area where I have the most
          expertise. I can also book GoPort packages, Disney and Universal stays
          and tickets, as well as cruise excursions even if you didn't book your
          cruise through me!
        </p>
        <h3>What types of things do I NOT book?</h3>
        <p>
          Land-based vacations like all-inclusive resorts, Las Vegas, Mexico,
          Europe, and so forth... Flights, hotels, transfers, unless they're
          bundled into a package through the cruise line...
        </p>
      </div>
    </div>
  );
};

export default TravelScreen;
