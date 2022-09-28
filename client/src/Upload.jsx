import React from "react";
import Header from "./Top";
import { useState } from "react";

import "./Upload.css";
import { useNavigate } from "react-router-dom";
const Upload = () => {
  const [form, updatedform] = useState("");

  const navigate = useNavigate();
  const submitData = async (e) => {
    console.log(form);
    e.preventDefault();

    const date = new Date().toDateString();
    const modi = date.split(" ");
    let mon = modi[1];
    modi[1] = modi[2];
    modi[2] = mon;
    modi.shift();
    const dateformat = modi.join(" ");

    const like = Math.floor(Math.random() * 100000);

    const datas = new FormData();
    datas.append("Author", form.Author);
    datas.append("Description", form.Description);
    datas.append("Location", form.Location);
    datas.append("File", form.File);
    datas.append("Date", dateformat);
    datas.append("likes", like);
    console.log(datas);
    console.log(dateformat, like);
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: datas,
    })
      .then((data) => data.json())
      .then((response) => console.log(response));
    navigate("/postview");
  };

  return (
    <div className="page">
      <Header />
      <form encType="multipart/form-data">
        <div className="uploadcontainer1">
          <input
            type="file"
            name="File"
            className="file1"
            required
            onChange={(e) => updatedform({ ...form, File: e.target.files[0] })}
          />
          <div>
            <input
              placeholder="Author"
              className="author1"
              required
              onChange={(e) => updatedform({ ...form, Author: e.target.value })}
            />
            <input
              placeholder="Location"
              className="Location1"
              required
              onChange={(e) =>
                updatedform({ ...form, Location: e.target.value })
              }
            />
          </div>
          <div>
            <input
              placeholder="description"
              className="description1"
              required
              onChange={(e) =>
                updatedform({ ...form, Description: e.target.value })
              }
            />
          </div>
          <div>
            <button type="submit" onClick={submitData} className="button1">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upload;
