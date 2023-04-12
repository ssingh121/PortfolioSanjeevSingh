import React from "react";
import "./Home.css";
import logo from "../../Assets/Images/me2.png";
import { TypeAnimation } from "react-type-animation";

import HomeAbout from "../../HomeComponents/HomeAbout/HomeAbout";
import HomeCertificate from "../../HomeComponents/HomeCertificates/HomeCertificates";
import HomeContacts from "../../HomeComponents/HomeContacts/HomeContacts";
import HomeDomain from "../../HomeComponents/HomeDomain/HomeDomain";
import HomeProjets from "../../HomeComponents/HomeProjects/HomeProjects";

function Home() {
  return (
    <div id="Home" className="d-flex flex-column hh">
      <div className="center">
        <img src={logo} alt="avatar" className="photo mb-2"  />

        <TypeAnimation
          cursor={true}
          sequence={["", 500, "Sanjeev Kumar Singh", 2000]}
          wrapper="h1"
          repeat={10}
        />
        <h5>Full-Stack Web Developer</h5>
      </div>

      <HomeAbout />
      <HomeCertificate />
      <HomeDomain />
      <HomeProjets />
      <HomeContacts />
    </div>
  );
}

export default Home;
