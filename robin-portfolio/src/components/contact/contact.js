import React from "react";

class contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1>
                            <span>Get In Touch.</span>
                        </h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">
                            Please feel free to reach out to me over email or
                            Linkedin. I'm always happy to chat with people about
                            projects, startups, or pretty much anything.
                        </p>
                    </div>
                    <div className="widget widget_contact">
                        <h4>Address and Phone</h4>
                        <p className="address">
                            Sean Konz
                            <br />
                            <span>swkonz [at] stanford [dot] edu</span>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default contact;
