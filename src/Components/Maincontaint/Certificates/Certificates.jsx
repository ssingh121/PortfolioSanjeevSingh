import React from "react";
import CertificateCard from "./CertificateCard";
import "./Certificates.css";


import internc from "../../Assets/Certificates/internshala.jpg";
import tsfc from "../../Assets/Certificates/spark.jpg";
import mernc from "../../Assets/Certificates/udemy.jpg";

import tcsc from "../../Assets/Certificates/tcs.jpg"
import unic from "../../Assets/Certificates/unicompiler.jpg";
import nitmizoramc from "../../Assets/Certificates/nit_mijoram.jpg";

import codechefc from "../../Assets/Certificates/codechef.jpg";
import flipc from "../../Assets/Certificates/flipkart.jpg";
import hackc from "../../Assets/Certificates/hackerrank_java.jpg";

import accenture from "../../Assets/Certificates/accenture.jpg";
import uiet from "../../Assets/Certificates/uiet.jpg";
import isro from "../../Assets/Certificates/isro.jpg";





function Certificates() {

  const certificatelist=[
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
    },
    {
      title : "Tata Consultancy Services",
      imgUrl : tcsc,
      siteUrl : "https://www.tcs.com/",
      tagline : "tcs_softskill_certificate"
    },
    
    {
      title : "UNICompiler",
      imgUrl : unic,
      siteUrl : "https://unicompiler.com/",
      tagline : "Web Dev Intern"
    },
    {
      title : "NIT Mijoram",
      imgUrl : nitmizoramc,
      siteUrl : "https://www.nitmz.ac.in/",
      tagline : "Web Dev Contest"
    },
    {
      title : "Codechef",
      imgUrl : codechefc,
      siteUrl : "https://www.codechef.com/",
      tagline : "SnackDown Certificate"
    },
    {
      title : "Flipkart",
      imgUrl : flipc,
      siteUrl : "https://www.flipkart.com/",
      tagline : "FlipKart Grid-4.0 dev-challenge"
    },
    {
      title : "Hackerrank",
      imgUrl : hackc,
      siteUrl : "https://www.hackerrank.com/",
      tagline : "Java Certification"
    },
    {
      title : "Accenture",
      imgUrl : accenture,
      siteUrl : "https://www.accenture.com/in-en",
      tagline : "Data Analyts"
    },
    {
      title : "ISRO",
      imgUrl : isro,
      siteUrl : "https://www.isro.gov.in/",
      tagline : "Machine Learning"
    },
    {
      title : "UIET CSJMU",
      imgUrl : uiet,
      siteUrl : "http://csjmu.ac.in/",
      tagline : "Internet of Things(IOT)"
    }
  ]


  return (
    <section
      className="certificate container"
      data-aos="fade-left"
    >
      <div className="section-title">
        <h2>Certificate</h2>
      </div>
      
      <div className="row">
      {certificatelist.map((element) => {
                  return (
                    < div className="column">
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
    </section>
  );
}

export default Certificates;
