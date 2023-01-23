import TemporaryDrawer from "./drawer";
import "./header.css";
import * as React from "react";
import { useMediaQuery } from "@mui/material";
import logo from '../../Assets/bhalu.jpg';


function Header() {
  const matches = useMediaQuery("(min-width:720px)");
  return (
    <div className="header">
      <div className="logos">
        <img src={logo} className="logo"></img>
        <div className="logoName">Bhalu Solutions.</div>
      </div>

      {matches ? (
        <div className="groupicons">
          <div className="clickicons"><a href="#Solutions">Solutions</a></div>
          <div className="clickicons"><a href="#About">About</a></div>
          <div className="clickicons"><a href="#Contact">Contact</a></div>
        </div>
      ) : null}
      {matches ? null : <TemporaryDrawer></TemporaryDrawer>}
    </div>
  );
}

export default Header;
