import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import main from "../images/budiman-main.png";
import reporthis from "../images/budiman-report-history.png";
import report from "../images/budiman-report.png";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    nextArrow: <></>, // Remove the next arrow
  };

  return (
    <section id="projects" style={{paddingTop:200}}>
      <div className="flex h-[40rem] justify-center items-center">
        <div className="grid grid-cols-2 content-center">
        <div className="text-center">
            <h1 className="ab-title">My Recent Project</h1>
            <p className="ab-p"> Budiman is a money tracking application, this application allows you to easily track your monthly budget, monitor your spending, and gain valuable insights through analytics. In this project, I worked on the report feature. It allows the user to see their monthly expense and income also the analytics, such as the financial status</p>
          </div>
          <div className="slider" style={{marginBottom:190}}>
            <Slider {...settings}>
                <Image src={main} alt="Main Image" className="slide-image" />

                <Image src={reporthis} alt="Report History Image" className="slide-image" />

                <Image src={report} alt="Report Image" className="slide-image" />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
