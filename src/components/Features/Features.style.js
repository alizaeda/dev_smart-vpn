import styled from "styled-components";
import { device } from "../../globalStyles";

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 6px 114px rgba(0, 0, 0, 0.06);
  padding: 67.5px 90px;
  margin-top: 103px;

  border-radius: var(--br1);
  @media ${device.large} {
    flex-direction: column;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child) {
    padding-right: 130px;
  }
  &:not(:last-child):before {
    content: "";
    position: absolute;
    width: 2px;
    height: 125.5px;
    background-color: #eeeff2;
    right: 0;
  }
  @media ${device.large} {
    padding-right: 0 !important;
    margin-bottom: 100px;
    &:before {
      content: none !important;
    }
  }
`;

export const CounterIcon = styled.div`
  background-color: #ffecec;
  width: 55px;
  height: 55px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--br3);
  margin-right: 36.5px;
`;

export const CounterContent = styled.div``;

export const CounterInt = styled.h3`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: var(--f4);
  color: var(--primary);
`;

export const CounterText = styled.p`
  font-size: var(--f3);
  color: var(--gray);
`;

export const OurFeaturesWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 95.8px;
  margin-bottom: 126px;

  @media ${device.medium} {
    flex-direction: column;
    align-items: center;
  }
`;

export const OurFeaturesImg = styled.img`
  width: 50%;
  margin-right: 169.5px;

  @media ${device.medium} {
    width: 100%;
    margin: auto;
  }
`;

export const OurFeaturesContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-flow: wrap;

  @media ${device.medium} {
    text-align: center;
    width: 100%;
    margin-top: 30px;
  }
`;

export const Heading = styled.h2`
  font-size: var(--f5);
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 20px;

  @media ${device.medium} {
    font-size: var(--f4);
  }
`;

export const Text = styled.p`
  color: var(--gray);
  margin-bottom: 20px;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media ${device.medium} {
    width: 100%;
    /* justify-content: center; */
    align-items: flex-start;
    margin-left: 10px;
  }
`;

export const FeatureItem = styled.li`
  color: var(--gray);
  font-size: var(--f1);
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
