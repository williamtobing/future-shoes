import React from "react";

import axios from "axios";
import Select from "react-select";

import "../../scss/main.scss";

class SectionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      courierList: ["JNE", "TIKI", "POS"],
      destination: null,
      weight: "1000",
      options: [],
      cekOngkirResults: [],
      formInfo: {
        name: "",
        email: "",
        phoneNumber: "",
        fullAddress: "",
      },
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://rajaongkir-fshoes.herokuapp.com/city")
      .then((res) => {
        this.setState({
          options: res.data.data.map((data) => {
            return {
              value: data.city_id,
              label: data.city_name,
            };
          }),
        });
      })
      .catch((e) => {
        this.setState({ error: e.response.data });
      });
  }

  componentWillUnmount() {
    this.setState({ error: "" });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { destination, weight, courierList, formInfo } = this.state;
    if (
      destination !== null &&
      weight !== "" &&
      formInfo.name !== "" &&
      formInfo.email !== "" &&
      formInfo.phoneNumber !== "" &&
      formInfo.fullAddress !== ""
    ) {
      this.setState({ error: "" });
      courierList.forEach((courier) => {
        axios
          .get("https://rajaongkir-fshoes.herokuapp.com/cekongkir", {
            params: {
              origin: 465,
              destination: destination.value,
              weight: weight,
              courier: courier.toLowerCase(),
            },
          })
          .then((res) => {
            let joined = this.state.cekOngkirResults.concat(res.data.data);
            this.setState({
              cekOngkirResults: joined,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      });
    } else {
      this.setState({
        error: "All field must be filled in or the type must be right",
      });
    }
  };

  handleChangeDestination = (destination) => {
    this.setState({ destination });
  };

  render() {
    const {
      formInfo,
      destination,
      cekOngkirResults,
      weight,
      options,
      error,
    } = this.state;
    return (
      <section id="contact-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Try Our Product</h2>
          <div className="bottom-line"></div>
          <p className="lead">Feel free to fill the form below</p>

          {error && <h3 style={{ color: "red" }}>{error}</h3>}

          <>
            {cekOngkirResults.length > 0 ? (
              <>
                <div style={{ textTransform: "none" }}>
                  <h4 style={{ textTransform: "capitalize" }}>
                    Name: {formInfo.name}
                  </h4>
                  <h4 style={{ textTransform: "lowercase" }}>
                    Email: {formInfo.email}
                  </h4>
                  <h4>Phone: {formInfo.phoneNumber}</h4>
                  <h5>Full Address: {formInfo.fullAddress}</h5>
                </div>

                <div style={{ padding: "50px" }}>
                  <div className="Header">
                    From: Tapanuli Utara To: {destination.label} Berat {weight}{" "}
                    gram
                  </div>
                  <table id="customers">
                    <thead>
                      <tr>
                        <th>Kurir</th>
                        <th>Jenis</th>
                        <th>Tarif</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cekOngkirResults.map((result, key) => {
                        return (
                          <tr key={key}>
                            {result.results[0]?.code ? (
                              <td style={{ textTransform: "uppercase" }}>
                                {result.results[0]?.code}
                              </td>
                            ) : (
                              <td>Not Supported</td>
                            )}
                            {result.results[0]?.costs[0]?.service ? (
                              <td>{result.results[0]?.costs[0]?.service}</td>
                            ) : (
                              <td>Not Supported</td>
                            )}
                            {result.results[0]?.costs[0]?.cost[0]?.value ? (
                              <td>
                                Rp {result.results[0]?.costs[0]?.cost[0]?.value}
                              </td>
                            ) : (
                              <td>Not Supported</td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <form onSubmit={this.handleSubmit}>
                <div className="text-fields">
                  <input
                    type="text"
                    className="text-input name-input"
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    value={formInfo.name}
                    onChange={(e) =>
                      this.setState({
                        formInfo: { ...formInfo, name: e.target.value },
                      })
                    }
                  />

                  <Select
                    value={destination}
                    onChange={this.handleChangeDestination}
                    options={options}
                    placeholder="City"
                  />

                  <input
                    type="email"
                    className="text-input email-input"
                    autoComplete="off"
                    placeholder="Email"
                    name="email"
                    value={formInfo.email}
                    onChange={(e) =>
                      this.setState({
                        formInfo: { ...formInfo, email: e.target.value },
                      })
                    }
                  />
                  <input
                    type="text"
                    className="text-input phone-input"
                    autoComplete="off"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formInfo.phoneNumber}
                    onChange={(e) =>
                      this.setState({
                        formInfo: { ...formInfo, phoneNumber: e.target.value },
                      })
                    }
                  />
                  <textarea
                    className="text-input message-input"
                    placeholder="Enter your full address"
                    autoComplete="off"
                    name="fullAddress"
                    value={formInfo.fullAddress}
                    onChange={(e) =>
                      this.setState({
                        formInfo: { ...formInfo, fullAddress: e.target.value },
                      })
                    }
                  ></textarea>
                </div>
                <button type="submit" className="btn-dark">
                  Submit
                </button>
              </form>
            )}
          </>
        </div>
      </section>
    );
  }
}

export default SectionForm;
