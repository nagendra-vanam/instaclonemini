import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Postview() {
  const [data, updateddata] = useState([]);

  const [liked, setlike] = useState("fa fa-regular fa-heart  fa-xl heart");
  const handle = () => {
    if (liked === "fa fa-regular fa-heart fa-xl heart") {
      setlike("fa fa-solid fa-heart fa-xl heart");
    } else {
      setlike("fa fa-regular fa-heart fa-xl heart");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((res) => {
      updateddata(res.data.data);
    });
  }, []);

  return (
    <div className="page">
      <div className="header">
        <div>
          <span className=" fa fa-brands fa-instagram  fa-2xl"></span>
          <span className="clone">Instagram</span>
        </div>
        <Link to="/upload">
          <i className=" fa fa-thin fa-camera cam fa-xl"></i>
        </Link>
      </div>
      <div className="line"> </div>
      {data.map((userdata, i) => {
        return (
          <div className="instapage" key={i}>
            <div>
              <div className="container">
                <div className="topcontainer">
                  <div>
                    <div className="name">{userdata.Author}</div>
                    <div className="location">{userdata.Location}</div>
                  </div>
                  <div>
                    <i className=" fa fa-light fa-ellipsis dots"></i>
                  </div>
                </div>
                <img src={userdata.File.url} alt=" image" />
                <div className="bottomcontainer">
                  <div>
                    <i onClick={handle} className={liked}></i>
                    <i className="fa fa-regular fa-paper-plane fa-lg heart"></i>
                  </div>
                  <div>
                    <div className="date">{userdata.Date}</div>
                  </div>
                </div>
                <div>
                  <div className="likes">{userdata.likes}likes</div>
                  <div>
                    <div className="description">{userdata.Description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Postview;
