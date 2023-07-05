import React from "react";
import { Link } from "react-router-dom";
import "../Css/Second.css";
import tiger from "../images/tiger.jpg";
import DensitySmallSharpIcon from "@mui/icons-material/DensitySmallSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Button } from "@mui/material";
import { data } from "../component/icon-data";

export const Second = () => {
  let [toggle, setToggle] = React.useState("20%");
  let [rtoggle, rsetToggle] = React.useState("80%");
  let [icon, setIcon] = React.useState();

  function Toggle() {
    if (toggle === "20%") {
      setToggle("0%");
      rsetToggle("100%");
      setIcon(<DensitySmallSharpIcon />);
    } else {
      setToggle("20%");
      rsetToggle("80%");
      setIcon();
    }
  }
  return (
    <div className="container">
      <div className="left-container" style={{ width: toggle }}>
        <div className="avatar">
          <span className="avatar-container">
            <img src={tiger} />
            <h2>Nishant Sah</h2>
            <span className="toggle" onClick={Toggle}>
              <CloseSharpIcon />
            </span>
          </span>
        </div>
        {data.map((item, index) => {
          return (
            <div className="icon-container" key={index}>
              <span className="icon">{item.icon}</span>
              <span className="icon-name">{item.name}</span>
            </div>
          );
        })}
      </div>
      <div
        className="second-right-container"
        style={{ width: rtoggle, backgroundColor: "gainsboro" }}
      >
        <div className="no-1">
          <div className="nav-left-right-container">
            <div className="toggle" onClick={Toggle}>
              {icon}
            </div>
            <div style={{ width: "50%" }}>
              <h1> Search Bar</h1>
            </div>
          </div>
          <div className="nav-right-right-container">
            <Button variant="contained" color="error">
              Add Sale
            </Button>
            <Button variant="contained">Add Purchase</Button>
            <Button variant="outlined">Add More</Button>
            <span>|</span>
            <WhatsAppIcon />
            <SettingsOutlinedIcon />
          </div>
        </div>
        <div className="no-2">
          <h2>Name</h2>
        </div>
        <div className="no-3">
          <div className="no-3-1">
            <div className="notification">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto aut saepe quibusdam iure dolorum eos voluptates,
                similique perspiciatis cumque adipisci. Officiis, nam? Est et
                dolorum sed architecto. Tenetur, ipsum earum?
              </p>
            </div>
          </div>
          <div className="no-3-2">
            <div className="no-3-2-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, quae quo ipsam eius ratione accusamus! Quidem sit quia
              debitis perferendis dolores, assumenda aut illo quasi eveniet,
              dolorum veniam praesentium cumque?
            </div>
            <div className="no-3-2-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos laboriosam vero repellat provident veritatis aliquid
              optio, eius voluptatem saepe pariatur! Blanditiis natus qui
              laudantium laboriosam impedit vel harum optio itaque!
            </div>
            <Link to="/">
              <h3>link for question no 1</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
