import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import * as Picture from "../../images/landing/placeholder.png";

class Landing extends React.Component {
  render() {
    return (
      // <div className="landContainer">
      //   <div className="largeBrand">AB&S Construction and Painting</div>
      //   <div className="localBrand">
      //     Running locally in San Antonio for over 15 years!
      //   </div>
      // </div>

      <div>
        <Card inverse>
          <CardImg
            width="1196px"
            height="400px"
            src={Picture}
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle
              style={{
                position: "absolute",
                width: "608px",
                height: "250px",
                left: "416px",
                top: "120px",
                fontFamily: "Tenor Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "48px",
                lineHeight: "56px",
                textAlign: "center",
                textTransform: "uppercase"
              }}
            >
              AB&S Construction and Painting{" "}
            </CardTitle>
            <CardText
              style={{
                position: "absolute",
                width: "659px",
                height: "42px",
                left: "416px",
                top: "300px",
                fontFamily: "Tenor Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "30px",
                lineHeight: "35px",
                textAlign: "center",
                textTransform: "uppercase"
              }}
            >
              Running locally in San Antonio for over 15 years!
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Landing;
