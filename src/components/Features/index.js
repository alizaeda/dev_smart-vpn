import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiServer } from "react-icons/hi";
import { Container } from "../../globalStyles";
import {
  Counter,
  CounterContent,
  CounterIcon,
  CounterInt,
  CounterText,
  CounterWrapper,
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
    </Container>
  );
};

export default Features;
