import React from "react";
import { Container } from "../../globalStyles";
import Card from "./Card";
import { cardOne, cardThree, cardTwo } from "./Data";
import {
  CardsWrapper,
  HeaderContent,
  Heading,
  PricingSection,
  Text,
} from "./Pricing.style";

const Pricing = () => {
  return (
    <PricingSection>
      <Container>
        <HeaderContent>
          <Heading>Choose Your Plan</Heading>
          <Text>
            Let's choose the package that is best for you and explore it happily
            and <br /> cheerfully.
          </Text>
        </HeaderContent>
        <CardsWrapper>
          <Card {...cardOne} />
          <Card {...cardTwo} />
          <Card {...cardThree} />
        </CardsWrapper>
      </Container>
    </PricingSection>
  );
};

export default Pricing;
