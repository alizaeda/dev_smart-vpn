import React from "react";
import { Container, SectionDesc } from "../../globalStyles";
import {
  TestimonialContainer,
  Heading,
  SectionHeading,
  Indicator,
  Indicators,
  LeftIndicators,
  RightIndicators,
  IconLeft,
  IconRight,
  TestimonialSection,
} from "./Testimonial.style";
import Card from "./TestimonialCard";
import { firstReview, secondReview, thirdReview } from "./Data";

const Testimonial = () => {
  return (
    <TestimonialSection>
      <Container id='testimonials'>
        <SectionHeading>
          <Heading>Trusted by Thousands of Happy Customer</Heading>
          <SectionDesc>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </SectionDesc>
        </SectionHeading>
        <TestimonialContainer>
          <Card {...firstReview} />
          <Card {...secondReview} />
          <Card {...thirdReview} />
        </TestimonialContainer>
        <Indicators>
          <LeftIndicators>
            <Indicator />
            <Indicator />
            <Indicator />
            <Indicator />
          </LeftIndicators>
          <RightIndicators>
            <IconLeft />
            <IconRight />
          </RightIndicators>
        </Indicators>
      </Container>
    </TestimonialSection>
  );
};

export default Testimonial;
