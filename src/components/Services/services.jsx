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
              <Col>column 1</Col>
              <Col>column 2</Col>
              <Col>column 4</Col>
            </Row>
          </p>
        </Card>
      </div>
    );
  }
}

export default Services;
