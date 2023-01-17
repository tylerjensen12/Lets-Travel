import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const AdminScreen = () => {
  const linkRef = useRef();
  const nameRef = useRef();
  const infoRef = useRef();
  const advRef = useRef();
  const portRef = useRef();

  const dateRef = useRef();
  const shipRef = useRef();
  const lengthRef = useRef();
  const placeRef = useRef();

  const dispatch = useDispatch();

  const handleNewVid = (e) => {
    e.preventDefault();
    const body = {
      url: linkRef.current.value,
      title: nameRef.current.value,
      description: infoRef.current.value,
      adventure: false,
      ports: false,
    };
    axios
      .post("api/newvideo", body)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

    Swal.fire({
      html: `<h3>New Video submitted!</h3>`,
      confirmButtonColor: "#7fe07f",
      color: "#150a39",
    });
    linkRef.current.value = "";
    nameRef.current.value = "";
    infoRef.current.value = "";
  };

  const addTrip = (e) => {
    e.preventDefault();

    const body = {
      date: dateRef.current.value,
      ship: shipRef.current.value,
      length: lengthRef.current.value,
      place: placeRef.current.value,
    };

    axios
      .post("/api/addtrip", body)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    dateRef.current.value = "";
    shipRef.current.value = "";
    lengthRef.current.value = "";
    placeRef.current.value = "";
  };

  return (
    <div>
      <h1>Admin</h1>
      <div>
        <h2>New Video</h2>
        <form onSubmit={handleNewVid}>
          <input type="text" placeholder="Youtube Link" ref={linkRef} />
          <input type="text" placeholder="Title" ref={nameRef} />
          <input type="text" placeholder="Description" ref={infoRef} />
          <div>
            <input
              type="radio"
              name="vidtype"
              value="adventure"
              checked="adventures"
              // onChange={handleChange}
            />
            Adventures
            <input
              type="radio"
              name="vidtype"
              value="ports"
              checked="ports"
              // onChange={handleChange}
            />
            Port Guides
            <input type="radio" name="vidtype" value="n/a" /> N/A
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div>
        <h2>Travel Plans</h2>
        <form onSubmit={addTrip}>
          <input type="date" placeholder="Cruise - Date" ref={dateRef} />
          <input type="text" placeholder="Cruise Ship" ref={shipRef} />
          <input type="number" placeholder="Length" ref={lengthRef} />
          <input type="text" placeholder="Place" ref={placeRef} />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AdminScreen;
