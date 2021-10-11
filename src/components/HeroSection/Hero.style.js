import styled from "styled-components";
import { device } from "../../globalStyles";

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

export const ContentButton = styled.button`
  align-self: flex-start;
  font-weight: 700; // need to edit
  font-size: 16px;
  color: var(--primary);
  transition: var(--transition);
  border-radius: var(--br1);
  color: #fff;
  background-color: var(--red);
  border: none;
  padding: 17.5px 77.5px;
  cursor: pointer;
  box-shadow: 0px 35px 54px rgba(245, 56, 56, 0.35);

  &:hover {
    background-color: #fff;
    border: 1px solid var(--red);
    color: var(--red-alt);
    transform: scale(0.9);
    box-shadow: 0px 15px 25px rgba(245, 56, 56, 0.35);
  }
  &:active {
    transform: scale(1.02);
  }

  @media ${device.large} {
    margin: auto;
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
