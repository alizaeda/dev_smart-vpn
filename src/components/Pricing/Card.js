import React from "react";
import { BsCheckLg } from "react-icons/bs";
import {
  CardButton,
  CardContainer,
  CardFeatures,
  CardFeaturesItem,
  CardPlan,
  CardTitle,
  Img,
  Light,
} from "./Card.style";

const Card = ({
  title,
  price,
  plan,
  features,
  cardImg,
  buttonVariant,
  buttonTextColor,
}) => {
  return (
    <>
      <CardContainer>
        <Img src={cardImg} alt='card' />
        <CardTitle>{title}</CardTitle>
        <CardFeatures>
          {features.map((feature, key) => (
            <CardFeaturesItem key={key}>
              <BsCheckLg color='#2FAB73' style={{ marginRight: 25.6 }} />
              {feature}
            </CardFeaturesItem>
          ))}
        </CardFeatures>
        <CardPlan>
          {price} {plan && <Light>{plan}</Light>}
        </CardPlan>
        <CardButton buttonColor={buttonVariant} textColor={buttonTextColor}>
          Select
        </CardButton>
      </CardContainer>
    </>
  );
};

export default Card;
