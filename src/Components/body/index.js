import React from "react";
import "./body.css";

import { useState } from "react";

import MediaCard from "../projectCard/projectCard";

import SolutionsPic from "../../Assets/solutions.jpg";

import PixelButton from "../button/pixelButton";
import H1PlusText from "../h1PlusText/h1PlusText";

function Body() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const projectCard = [
    {
      title: "Ricochet Robots",
      subheader: "2D-Game",
      img: require("../../Assets/board.png"),
      language: "Language: Java",
      detail:
        'A simple implementation of Alex Randolph\'s board game Ricochet Robots including solver. This game is witten in JAVA. Where I learned some of the major algorithms in Computer science, one of such is "Find and hunt" algorithum. Over this I built an AI that can give the solution of the puzzle. The most intresting part was to learn how to build the GUI and the "back-end" supporting it. All the updates were done periodically in 4 different Iteration. This Project is hosted on Github, which leads me to learn the version control language, git. The whole design was created by me and all the code was led by me.',
      software: "Software: Eclipse, IntelliJ.",
      hosted: "Hosted: Github",
      git: "https://github.com/djgrillopena/comp2005-winter20-group11",
    },
    {
      title: "Sudoko Solver",
      subheader: "2D-Game Solver",
      img: require("../../Assets/Sudoko.png"),
      language: "Language: Python",
      detail:
        'A graphical interface game of Sudoko. I have built an solver for the puzzle, which works on "BACK Tracking algorithm". It was a fun side project. I used the backtracking algorithm in this solver because if we try to find each and every solution and try to see if it works then it will take forever. So, by doing some research and talking to some of my seniors, i used the back tracking algorithum. This Project is an product of the bigger project like Richochet Robots. The management skills that i learned from the previous project encouraged me to built this one.',
      software: "Software: PyCharm, Idel.",
      hosted: "Hosted: Github",
      git: "https://github.com/kathanjshah/Sudoku/tree/master",
    },
  ];
  const getCard = projectCard.map((cd) => {
    return (
      <MediaCard
        title={cd.title}
        subheader={cd.subheader}
        img={cd.img}
        language={cd.language}
        detail={cd.detail}
        software={cd.software}
        hosted={cd.hosted}
        git={cd.git}
      />
    );
  });

  const welcome = [
    {
      heading: "Prelude of Company",
      text: "Welcome to Bhalu(Bear in Sanskrit) Solutions, your one-stop solution for all your business IT needs. We understand the everyday stresses and strains that come with running a company, but fear not! At Bhalu Solutions, we've got you covered. With our expert team and cutting-edge technology, we can claw away at any tension you may have and help your business reach new heights. Whether it's streamlining processes, increasing efficiency of your Web app, or making your company website look professional, we'll work with you every step of the way to achieve your goals. Let us take the burden off your shoulders, so you can focus on what really matters: growing your business.",
    },
    ,
  ];

  const solutions = [
    {
      heading: "01. Fast & Agile",
      text: "At Bhalu, we pride ourselves on being fast and agile in delivering solutions to our clients. We understand that in today's fast-paced business environment, time is of the essence. That's why our team is dedicated to quickly assessing your needs and providing efficient and effective solutions that deliver results. We use cutting-edge technologies and methodologies to ensure that our solutions are not only robust, but also flexible and adaptable to your evolving business needs. Whether you're looking to streamline your operations or jump into new markets, our fast and agile approach allows us to pivot quickly and capitalize on new opportunities",
    },
    {
      heading: "02. Cost-Effective",
      text: "Cost efficiency is at the forefront of our minds at Bhalu. We understand that as a business owner, you need to maximize your return on investment while keeping costs low. That's why our solutions are tailored to meet your unique needs and budget. We use a combination of proven methodologies and innovative technologies to deliver high-quality solutions at a fraction of the cost of our competitors. Our team is dedicated to finding the most cost-effective ways to improve your business, without compromising on quality or functionality. With Bear, you can rest assured that you're getting the best value for your money, and that your investment will pay off in the long-term.",
    },
  ];

  const getSolutions = solutions.map((sl) => {
    return <H1PlusText heading={sl.heading} text={sl.text} />;
  });

  return (
    <div className="body">
      <div className="body1">
        <div className="tagline">
          <h1 className="heading">We will claw your solutions out</h1>
        </div>
        <div className="intro">
          <PixelButton></PixelButton>
          <div className="welcome">
            <h1 className="para">{welcome[0].heading}</h1>
            <p className="para">{welcome[0].text}</p>
          </div>
        </div>
      </div>
      <div id="Solutions" className="body2">
        <h1 className="heading">Solutions You Can Trust</h1>
        <div className="h1tagsImage">
          <div className="h1tags">{getSolutions}</div>
          <img className="h1Imagetag" src={SolutionsPic}></img>
        </div>
      </div>
      <div id="About" className="body3">
        <h1 className="heading">About</h1>
      </div>
    </div>
  );
}

export default Body;
