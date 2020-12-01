import React from "react";
import { Card } from "reactstrap";

class AboutUs extends React.Component {
  render() {
    return (
      <Card
        body
        style={{
          fontFamily: "Tenor Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "15px",
          textAlign: "center",
          margin: "40px"
        }}
      >
        AB&S is pleased to offer the Greater San Antonio area over 15 years of
        residential painting and remodeling. We offer a variety of professional
        services at competitive rates. We are licensed, insured, and bonded for
        your protection. We welcome insurance claims, and references are
        available per your request.. Give us a call today to schedule your free
        estimate! Military and senior citizen discounts apply!
      </Card>
    );
  }
}

export default AboutUs;
