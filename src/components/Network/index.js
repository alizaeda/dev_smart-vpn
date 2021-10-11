import React from "react";
import networkImg from "../../images/map.png";
import netflix from "../../images/client-1.svg";
import reddit from "../../images/client-2.svg";
import amazon from "../../images/client-3.svg";
import discord from "../../images/client-4.svg";
import spotify from "../../images/client-5.svg";
import {
  Bold,
  Container,
  SectionDesc,
  SectionHeader,
} from "../../globalStyles";
import { Img, SectionHeading, SectionImg, Sponsers } from "./Network.style";

const Network = () => {
  return (
    <>
      <Container>
        <SectionHeading>
          <SectionHeader>
            Huge Global Network <br /> of Fast VPN
          </SectionHeader>
          <SectionDesc>
            See Smart<Bold>VPN</Bold> everywhere to make it easier for you when
            you move
            <br />
            locations.
          </SectionDesc>
        </SectionHeading>
        <SectionImg src={networkImg} alt='networkImg' />
        <Sponsers>
          <Img src={netflix} alt='netflix' />
          <Img src={reddit} alt='reddit' />
          <Img src={amazon} alt='amazon' />
          <Img src={discord} alt='discord' />
          <Img src={spotify} alt='spotify' />
        </Sponsers>
      </Container>
    </>
  );
};

export default Network;
