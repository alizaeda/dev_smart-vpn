import React from "react";
import heroImg from "../../images/Illustration-1.png";

import { Container } from "../../globalStyles";
import {
  ContentButton,
  ContentHeading,
  ContentText,
  HeroContent,
  HeroImgWrapper,
  HeroWrapper,
  Img,
  Strong,
} from "./Hero.style";

const Hero = () => {
  return (
    <>
      <Container>
        <HeroWrapper>
          <HeroContent>
            <ContentHeading>
              Want anything to be easy with <Strong>SmartVPN</Strong>.
            </ContentHeading>
            <ContentText>
              Provide a network for all your needs with ease and fun using
              <Strong> SmartVPN</Strong> discover interesting features from us.
            </ContentText>
            <ContentButton big to='/signin'>
              Get Started
            </ContentButton>
          </HeroContent>
          <HeroImgWrapper>
            <Img src={heroImg} alt='hero' />
          </HeroImgWrapper>
        </HeroWrapper>
      </Container>
    </>
  );
};

export default Hero;
