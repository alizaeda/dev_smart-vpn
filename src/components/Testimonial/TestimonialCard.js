import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import {
  CardContainer,
  CardHeader,
  CardText,
  CardTitle,
  Img,
  Location,
  Name,
  Rate,
} from "./TestimonialCard.style.";

const Card = ({ profileImg, name, location, rate, review }) => {
  return (
    <>
      <CardContainer>
        <CardHeader>
          <Img src={profileImg} />
          <CardTitle>
            <Name>{name}</Name>
            <Location>{location}</Location>
          </CardTitle>
          <Rate>
            {rate}{" "}
            <TiStarFullOutline
              color='#FEA250'
              size={18}
              style={{ marginLeft: 11.38 }}
            />
          </Rate>
        </CardHeader>
        <CardText>{review}</CardText>
      </CardContainer>
    </>
  );
};

export default Card;
