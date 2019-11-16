import React from "react";

class about extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/Robin_prof.jpg"
              alt="Pic of me:D"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              I'm currently a Senior at Stanford University majoring in American
              Studies with a focus on race, gender and sexuality in American art
              and entertainment. Additionally, I'm minoring in Creative Writing
              with an emphasis on screenwriting. My professional experience
              spans both scripted and unscripted television, working with
              development teams to create new and exciting content. In my free
              time, I perfom improv and standup comedy, create sketch vidoes,
              and write TV pilots. My most recent pilot won Best Comedy Script
              in the 2019 All Write Now screenwriting competition.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Robin Fierberg</span>
                  <br />

                  <span>robin.fierberg@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={process.env.PUBLIC_URL + "/Robin Fierberg Resume.pdf"}
                    className="button"
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}

export default about;
