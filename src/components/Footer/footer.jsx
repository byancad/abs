import React from "react";
import { Card } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <Card>
        <div className="footerContainer">
          <div className="free">Free Estimates</div>
          <div className="logoCard">AB&S Construction</div>
          <div className="touchCard">
            <div className="touchTitle">Get in Touch </div>
            <div className="contactList">
              <ul>
                <div>Phone</div>
                <div>Email</div>
                <div>Location</div>
              </ul>
            </div>
          </div>
          <div className="connectCard">
            <div className="connectTitle">Connect</div>
            <div className="icons">
              <div className="facebook">Facebook</div>
              <div className="yelp">Yelp</div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Footer;
