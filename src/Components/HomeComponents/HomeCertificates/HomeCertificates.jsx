import React from "react";
import { Link } from "react-router-dom";
import CertificateCard from "./HomeCertificateCard";
import "./HomeCertificates.css";

import internc from "../../Assets/Certificates/internshala.jpg";
import tsfc from "../../Assets/Certificates/spark.jpg";
import mernc from "../../Assets/Certificates/udemy.jpg";


function Certificates() {
  const certificatelist = [
    {
      title : "Origin Cloud Tech pvt.ltd",
      imgUrl : internc,
      siteUrl : "https://internshala.com/student/dashboard",
      tagline : "Full Stack Web Development intern"
    },
    {
      title : "The Sparks Foundation",
      imgUrl : tsfc,
      siteUrl : "https://www.thesparksfoundationsingapore.org/",
      tagline : "Web Development & Designing Intern"
    },
    {
      title : "Udemy",
      imgUrl : mernc,
      siteUrl : "https://www.udemy.com/",
      tagline : "Web Development Bootcamp"
    }
  ];

  return (
    <section
      className="certificate"
      data-aos="fade-left"
      // style={{ padding: "30px" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Certificate</h2>
        </div>

        <div className="row">
          {certificatelist.map((element) => {
            return (
              <div className="column">
                <CertificateCard
                  title={element.title}
                  tagline={element.tagline}
                  imgUrl={element.imgUrl}
                  siteUrl={element.siteUrl}
                />
              </div>
            );
          })}
        </div>
        <div className="row" style={{ justifyContent:"center" , padding:"50px" }}>
          <Link to="/certificates" className="btn" style={{ maxWidth:"98%" }}>
            View More..
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
