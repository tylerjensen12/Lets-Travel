import React, { useState, useRef } from "react";
import axios from "axios";

const AdminScreen = () => {
  const [newVideo, setNewVideo] = useState({});
  const linkRef = useRef();
  const nameRef = useRef();
  const infoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bod = {
      url: linkRef.current.value,
      title: nameRef.current.value,
      description: infoRef.current.value,
      adventure: false,
      ports: false,
    };
    axios
      .post("api/newvideo", bod)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>Admin</h1>
      <div>
        <h2>New Video</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Youtube Link" ref={linkRef} />
          <input type="text" placeholder="Title" ref={nameRef} />
          <input type="text" placeholder="Descirption" ref={infoRef} />
          <div>
            <input
              type="radio"
              name="vidtype"
              value="adventures"
              checked={true}
            />
            Adventures
            <input
              type="radio"
              name="vidtype"
              value="portGuide"
              checked={true}
            />
            Port Guides
            <input type="radio" name="vidtype" value="n/a" /> N/A
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminScreen;
