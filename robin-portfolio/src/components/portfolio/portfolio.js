import React from 'react';

class portfolio extends React.Component {
  render () {
      return (
  
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Some of my Projects</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" >
                      <img alt="project pic" src="images/portfolio/sign-lang.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Activity Recognition</h5>
                          <p>Detecting Sign Language Signs</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" >
                      <img alt="project pic" src="images/portfolio/impairment-detection.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Video Analysis</h5>
                          <p>Autometed System for drug impairment detection</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" >
                      <img alt="project pic" src="images/portfolio/winte.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Robots</h5>
                          <p>Custom battle robot</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" >
                      <img alt="project pic" src="images/portfolio/holoLens.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Augmented Reality</h5>
                          <p>HoloLens for Medical assessments</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" >
                      <img alt="project pic" src="images/portfolio/h4d.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Knowledge Management</h5>
                          <p>Lean Methodology with government agencies</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" >
                      <img alt="project pic" src="images/portfolio/theatre.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Technical Theatre</h5>
                          <p>Building sets from the ground up</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" >
                      <img alt="project pic" src="images/portfolio/animal-shelter.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Saving Pets</h5>
                          <p>Tech for saving animals</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" >
                      <img alt="project pic" src="images/portfolio/eyes.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Assistive Technologies</h5>
                          <p>Hybrid EEG / Eye Tracking System</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
            --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/sign-lang.jpg" alt="signing hands" />
              <div className="description-box">
                <h4>Activity Recognition</h4>
                <p>A time distributed neural net for detecting sign language signs as they're signed. The motivation 
                  was to build a translator similar to that of a google translate</p>
                <span className="categories"><i className="fa fa-tag" />Machine Learning, CNNs, Pytorch, Google Cloud</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/swkonz/cs231n-final_project">Details</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/impairment-detection.jpg" alt="project pic" />
              <div className="description-box">
                <h4>Video Analysis</h4>
                <p>Working on using Activity recognition and traditional feature extraction in order to detect impairment 
                  levels in users due to drug and alcohol use.</p>
                <span className="categories"><i className="fa fa-tag" />AI, Regression, Statistics, Time-distributed CNNs</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/swkonz/cs221FinalProject">Details</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/winte.jpg" alt="project pic" />
              <div className="description-box">
                <h4>Building a battle robot</h4>
                <p>Built a robot from scratch based a specification for a battle arena where the robot would shootnerf  balls at 
                  lego towers over 2 meters away</p>
                <span className="categories"><i className="fa fa-tag" />Analog circuts, DC/Stepper Motors, Arduino, Mechanical Engineering</span>
              </div>
              <div className="link-box">
                <a href="https://wintetheroomba.weebly.com/">Details</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/holoLens.jpg" alt="project pic" />
              <div className="description-box">
                <h4>Augmented Reality</h4>
                <p>Built a HoloLens app using Unity to visualize 3D models generated from Real DICOM imagery from MRIs and CT scans</p>
                <span className="categories"><i className="fa fa-tag" />Microsoft HoloLens, Unity, DirectX, DICOM</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/swkonz/EE267FinalProject">Details</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/h4d.jpg" alt="project pic" />
              <div className="description-box">
                <h4>Knowledge Management</h4>
                <p>Member of the founding team for Librarian.AI, a startup that spun out of the Stanford Hacking for Defense class. 
                  We worked on building knowledge management tools for Intelligence agencies.</p>
                <span className="categories"><i className="fa fa-tag" />Knowledge Management Systems, Clustering, Databases, Lean Methodology</span>
              </div>
              <div className="link-box">
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/theatre.jpg" alt="project pic" />
              <div className="description-box">
                <h4>Technical Theatre</h4>
                <p>Set building, Video Engineering, and Sound Design technician for five large scale productions at Stanford. 
                  Recent credits include Technical Director of The Addams Family, and Associate Video Designer of Next To Normal.
                </p>
                <span className="categories"><i className="fa fa-tag" />Technical Theatre, Carpentry, Visual Effects</span>
              </div>
              <div className="link-box">
                <a href="https://ramshead.stanford.edu/">Details</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/animal-shelter.jpg" alt="project pic" />
              <div className="description-box">
                <h4>Saving Pets</h4>
                <p>Won top award at Stanford Treehacks 2017 for a project with an animal shelter to redirect resources and animal 
                  populations which had room to accept more animals.</p>
                <span className="categories"><i className="fa fa-tag" />Hackathon, A*, Social Impact </span>
              </div>
              <div className="link-box">
                <a href="https://devpost.com/software/everybody-lives">Details</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/eyes.jpg" alt="project pic" />
              <div className="description-box">
                <h4>Assistive Technologies</h4>
                <p>Designed and built a novel computer interface system using a single camera Eyetracking approach, and a custom 
                  constructed EEG. Filed for my first patent based on the resarch going into the project.</p>
                <span className="categories"><i className="fa fa-tag" />Computer Vision, EEG, Assistive Technologies</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/swkonz/CSightTech">Details</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
          </div> {/* row End */}
        </section>
      );
    }
  };

  export default portfolio;