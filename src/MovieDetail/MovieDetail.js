import React, { Component } from "react";
import { Row, Col } from "antd";
import "./MovieDetail.css";
export default class MovieDetail extends Component {
  render() {
    return (
      <div className="imagebg">
        <Row className="p-5">
          <Col
            offset={2}
            lg={4}
            xs={24}
            sm={24}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              style={{ width: 195 }}
              className="mb-3"
              alt="example"
              src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            />
          </Col>
          <Col offset={1} lg={14} xs={24} sm={24}>
            <Row>
              <Col>
                <h4
                  style={{ float: "left", color: "#570AFF", fontWeight: 800 }}
                >
                  Max Mad: The Movie
                </h4>
              </Col>
            </Row>
            <Row>
              <Col lg={8} xs={24} sm={24}>
                <p className="heading">
                  Popularity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
                  <span className="headingValue">461.929</span>
                </p>
              </Col>
              <Col lg={8} xs={24} sm={24}>
                <p className="heading">
                  Vote Count &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                  <span className="headingValue">461.929</span>
                </p>
              </Col>
              <Col lg={8} xs={24} sm={24}>
                <p className="heading">
                  Vote Average :{" "}
                  <span className="headingValue">
                    8.5 <span style={{ fontSize: 12 }}>/10</span>{" "}
                  </span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={22}>
                <hr
                  style={{
                    color: "#a6a6a6",
                    backgroundColor: "#a6a6a6",
                    height: 1
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={24} sm={24}>
                <p className="headingValue" style={{ color: "white" }}>
                  Original Language &nbsp;&nbsp;&nbsp;:
                  <span style={{ color: "#570AFF" }}> &nbsp;&nbsp;EN</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={24} sm={24}>
                <p className="headingValue" style={{ color: "white" }}>
                  Date of Release
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                  <span style={{ color: "#570AFF" }}>
                    {" "}
                    &nbsp;&nbsp;2019-10-02
                  </span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={24} sm={24}>
                <p className="headingValue" style={{ color: "white" }}>
                  Adult
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                  <span style={{ color: "#570AFF" }}> &nbsp;&nbsp;No</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={24} xs={24} sm={24}>
                <h5
                  className="headingValue"
                  style={{ color: "#570AFF", fontSize: 16 }}
                >
                  Description
                </h5>

                <p className="heading">
                  During the 1980s, a failed stand-up comedian is driven insane
                  and turns to a life of crime and chaos in Gotham City while
                  becoming an infamous psychopathic crime figure.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
