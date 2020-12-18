import React from "react";

import axios from "axios";
// import Select from "react-select";

import "../../scss/main.scss";

class SectionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isSubmitted: false,
      data: [],
      origin: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://rajaongkir-fshoes.herokuapp.com/city")
      .then((response) => {
        const city = response.data.data;
        this.setState({ data: city });
        // this.setState({ origin: })
        // console.log(this.state.data);
      });
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let checkForm;
    const cities = this.state.data;
    // const options = cities.map((city) => {
    //   return city.city_name;
    // });
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
                {/* <input
                  type="text"
                  className="text-input subject-input"
                  placeholder="City"
                  name="subject"
                /> */}
                <select className="text-input subject-input" name="subject">
                  <option key="0">City</option>
                  {cities.map((item) => {
                    return <option key={item.city_id}>{item.city_name}</option>;
                  })}
                </select>
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
