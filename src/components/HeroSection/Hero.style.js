import styled from "styled-components";
import { device } from "../../globalStyles";
import Button from "../Button";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  @media ${device.large} {
    flex-direction: column-reverse;
    margin-top: 20px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-right: 40px;
  @media ${device.large} {
    width: 100%;
    margin: auto;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const ContentHeading = styled.h1`
  font-size: var(--f6);
  font-weight: 500;
  margin-bottom: 20px;
  @media ${device.medium} {
    font-size: 32px;
  }
`;

export const Strong = styled.span`
  font-weight: bold;
`;

export const ContentText = styled.p`
  margin-bottom: 50px;
  color: var(--gray);
  font-weight: 500;
  @media ${device.large} {
    margin-bottom: 30px;
  }
`;

export const HeroImgWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.large} {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Test = styled.button`
  ${Button}
`;

export const ContentButton = styled(Button)`
  align-self: flex-start;
`;
