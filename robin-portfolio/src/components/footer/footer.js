import React from 'react';

class footer extends React.Component {
  render () {
      return (
  
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://www.facebook.com/sean.konz.1"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/sean-k-19a327b2/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/swkonz"><i className="fa fa-github" /></a></li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      );
    }
  };

export default footer;