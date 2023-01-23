import React from 'react'

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div>
      <div id="Contact" className="para">
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
  )
}

export default Footer;
