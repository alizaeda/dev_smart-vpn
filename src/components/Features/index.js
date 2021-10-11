import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiServer } from "react-icons/hi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Container } from "../../globalStyles";
import featureImg from "../../images/Illustration-2.png";
import {
  Counter,
  CounterContent,
  CounterIcon,
  CounterInt,
  CounterText,
  CounterWrapper,
  FeatureItem,
  FeaturesList,
  Heading,
  OurFeaturesContent,
  OurFeaturesImg,
  OurFeaturesWrapper,
  Text,
} from "./Features.style";

const Features = () => {
  return (
    <Container>
      <CounterWrapper>
        <Counter>
          <CounterIcon>
            <MdLocationOn size={28} color='#F53838' />
          </CounterIcon>
          <CounterContent>
            <CounterInt>90+</CounterInt>
            <CounterText>Users</CounterText>
          </CounterContent>
        </Counter>
        <Counter>
          <CounterIcon>
            <FaUser size={20} color='#F53838' />
          </CounterIcon>
          <CounterContent>
            <CounterInt>30+</CounterInt>
            <CounterText>Locations</CounterText>
          </CounterContent>
        </Counter>
        <Counter>
          <CounterIcon>
            <HiServer size={28} color='#F53838' />
          </CounterIcon>
          <CounterContent>
            <CounterInt>50+</CounterInt>
            <CounterText>Servers</CounterText>
          </CounterContent>
        </Counter>
      </CounterWrapper>
      <OurFeaturesWrapper>
        <OurFeaturesImg src={featureImg}></OurFeaturesImg>
        <OurFeaturesContent>
          <Heading>We Provide Many Features You Can Use</Heading>
          <Text>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </Text>
          <FeaturesList>
            <FeatureItem>
              <BsFillCheckCircleFill
                color='#2FAB73'
                style={{ marginRight: "12px" }}
                size={20}
              />
              Powerfull online protection.
            </FeatureItem>
            <FeatureItem>
              <BsFillCheckCircleFill
                color='#2FAB73'
                style={{ marginRight: "12px" }}
                size={20}
              />
              Internet without borders.
            </FeatureItem>
            <FeatureItem>
              <BsFillCheckCircleFill
                color='#2FAB73'
                style={{ marginRight: "12px" }}
                size={20}
              />
              Supercharged VPN
            </FeatureItem>
            <FeatureItem>
              <BsFillCheckCircleFill
                color='#2FAB73'
                style={{ marginRight: "12px" }}
                size={20}
              />
              No specific time limits.
            </FeatureItem>
          </FeaturesList>
        </OurFeaturesContent>
      </OurFeaturesWrapper>
    </Container>
  );
};

export default Features;
