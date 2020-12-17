import React from "react";

import "../../scss/main.scss";

class SectionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let checkForm;
    if (this.state.isSubmitted) {
      checkForm = (
        <section id="contact-a" className="text-center py-3">
          <div className="container">
            <h2 style={{ margin: "235px 0 220px 0" }} className="section-title">
              Terkirim
            </h2>
          </div>
        </section>
      );
    } else {
      checkForm = (
        <section id="contact-a" className="text-center py-3">
          <div className="container">
            <h2 className="section-title">Try Our Product</h2>
            <div className="bottom-line"></div>
            <p className="lead">Feel free to fill the form below</p>
            <form
              onSubmit={() => {
                this.handleSubmit();
              }}
            >
              <div className="text-fields">
                <input
                  type="text"
                  className="text-input name-input"
                  placeholder="Name"
                  name="name"
                />
                <input
                  type="text"
                  className="text-input subject-input"
                  placeholder="City"
                  name="subject"
                />
                <input
                  type="email"
                  className="text-input email-input"
                  placeholder="Email"
                  name="email"
                />
                <input
                  type="text"
                  className="text-input phone-input"
                  placeholder="Phone Number"
                  name="phone"
                />
                <textarea
                  className="text-input message-input"
                  placeholder="Enter your full address"
                  name="message"
                ></textarea>
                <div className="my-2">
                  <div data-netlify-recaptcha="true"></div>
                </div>
              </div>
              <button type="submit" className="btn-dark">
                Submit
              </button>
            </form>
          </div>
        </section>
      );
    }
    return <>{checkForm}</>;
  }
}

export default SectionForm;
