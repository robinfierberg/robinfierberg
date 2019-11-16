import React from "react";

class header extends React.Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi! I'm Robin Fierberg.</h1>
            <h2>Welcome to my website!</h2>
            <h3>
              I'm a writer, filmmaker and comedien interested in creating
              stories that bring people together and make us laugh. I love
              movies, TV and sketch comedy, and I hope one day to work as a
              television writer. If you've read this far, congratulations!
              There's a secret prize for you at the bottom of the website ;)
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/robin.fierberg">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/robin-fierberg-16b384130/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCuFVHa-K5WkXXxRMoQtbUmg">
                  <i className="fa fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default header;
