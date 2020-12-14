import React from "react";
import { Card, Row, Col } from "reactstrap";

class Services extends React.Component {
  render() {
    return (
      <div>
        <Card body>
          <div className="" style={{ textAlign: "center" }}>
            Services we offer
          </div>
          <p className="lead">
            <Row>
              <Col>
                <ul>
                  <li>Additions</li>
                  <li>Demolitions</li>
                  <li>Window and Door installations</li>
                  <li>Roofing</li>
                  <li>Fascia and soffit repairs</li>
                  <li>Pressure washing</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Decking</li>
                  <li>Crown molding</li>
                  <li>Make readys</li>
                  <li>Landscaping</li>
                  <li>Lawn maintenance</li>
                  <li>Tree trimming</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  {" "}
                  <li>Retaingin walls</li>
                  <li>Privacy fences</li>
                  <li>Remodeling</li>
                  <li>Siding -Hardie plank</li>
                  <li>Painting -interior and exterior</li>
                </ul>
              </Col>
            </Row>
          </p>
        </Card>
      </div>
    );
  }
}

export default Services;
