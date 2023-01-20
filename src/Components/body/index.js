import React from "react";
import "./body.css";

import BugReportIcon from "@mui/icons-material/BugReport";
import { useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import TimelineCmpt from "../timeline/timelineCmpt";
import MediaCard from "../projectCard/projectCard";
import kathan from "../../Assets/kathan.jpg";
import js from "../../Assets/js.png";
import java from "../../Assets/java.png";
import cplusplus from "../../Assets/cplusplus.png";
import css from "../../Assets/css.png";
import gitpic from "../../Assets/git.png";
import html from "../../Assets/html.png";
import nextjs from "../../Assets/nextjs.png";
import python from "../../Assets/python.png";
import reactpic from "../../Assets/react.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
    "Welcome to Bhalu(Bear in Sanskrit) Solutions, your one-stop solution for all your business IT needs. We understand the everyday stresses and strains that come with running a company, but fear not! At Bhalu Solutions, we've got you covered. With our expert team and cutting-edge technology, we can claw away at any tension you may have and help your business reach new heights. Whether it's streamlining processes, increasing efficiency of your Web app, or making your company website look professional, we'll work with you every step of the way to achieve your goals. Let us take the burden off your shoulders, so you can focus on what really matters: growing your business.",
  ];

  return (
    <div className="body">
      <div className="body1">
        <div className="tagline">
          <h1 className="heading">We will claw your solutions out</h1>
        </div>
        <div className="intro">
          <PixelButton ></PixelButton>
          <div className="welcome">
            <p className="para">{welcome[0]}</p>
          </div>
        </div>
      </div>

      <div id="Solutions" className="body3">
        <h1 className="heading">Solutions You Can Trust</h1>
        <H1PlusText heading="01. Fast & Agile" text = "At Bhalu, we pride ourselves on being fast and agile in delivering solutions to our clients. We understand that in today's fast-paced business environment, time is of the essence. That's why our team is dedicated to quickly assessing your needs and providing efficient and effective solutions that deliver results. We use cutting-edge technologies and methodologies to ensure that our solutions are not only robust, but also flexible and adaptable to your evolving business needs. Whether you're looking to streamline your operations or jump into new markets, our fast and agile approach allows us to pivot quickly and capitalize on new opportunities"></H1PlusText>
      </div>
      <div id="Education" className="body4">
        <h1>Education</h1>
        <TimelineCmpt className="timeline" isJob={false} />
      </div>
      <div id="Project" className="body5">
        <h1>Projects</h1>
        <div className="internal">{getCard}</div>
      </div>
      <div id="About" className="body6">
        <div className="about">
          <h1>About Me</h1>
          <p>
            I am a Full Stack Software Developer. I am currently learning about
            Web3 and Cryptography.
          </p>
          <p>
            My aim is to challenge myself everyday with new problems so I can
            craft myself into a better engineer everyday.
          </p>
          <p>
            Learning about new technology, discoveries, inventions, philosophy
            or just introducing myself to something new fills most of my
            schedule when I am not working. I am a curious learner and a deep
            thinker who likes to get acquainted with new piece of knowledge as
            it is very enriching and fullfilling for me.
          </p>
        </div>
        <div>
          <img src={kathan} className="kathan"></img>
        </div>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div className="skills">
          <div>
            <p></p>
            <img className="skill" src={reactpic}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={js}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={html}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={css}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={python}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={gitpic}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={nextjs}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={cplusplus}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={java}></img>
          </div>
        </div>
      </div>
      <div id="Contact">
        <h1>Contact</h1>
        <h3>Let's create your next experience together</h3>
        <h3>kjshah@mun.ca</h3>
        <a href="https://github.com/kathanjshah">
          <GitHubIcon></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/kathanjshah/">
          <LinkedInIcon></LinkedInIcon>
        </a>
      </div>
    </div>
  );
}

export default Body;
