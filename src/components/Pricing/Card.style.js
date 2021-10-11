import styled from "styled-components";
import { device } from "../../globalStyles";
import Button from "../Button";

export const CardContainer = styled.div`
  width: 330px;
  height: 760px;
  background-color: #fff;
  margin-bottom: 150px;
  border-radius: var(--br1);
  border: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 50px;
  }

  @media ${device.medium} {
    margin: auto;
    margin-bottom: 20px;
  }
`;

export const Img = styled.img`
  /* width: 100%; */
`;

export const CardTitle = styled.h2`
  margin: 30px 0;
  font-size: var(--fs2);
  font-weight: 500;
`;

export const CardFeatures = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 230px;
  margin-bottom: 50px;
  /* align-items: center; */
`;

export const CardFeaturesItem = styled.li`
  font-size: var(--f1);
  color: var(--gray);
  line-height: 30px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CardPlan = styled.h2`
  font-size: var(--f4);
  color: var(--primary);
  margin-bottom: 20px;

  font-weight: 500;
`;

export const CardButton = styled(Button)`
  width: 177.88px;
  height: 45px;
  border-width: 2px;

  background-color: ${props => props.buttonColor};
  color: ${props => props.textColor};
`;

export const Light = styled.span`
  color: var(--gray);
  font-weight: 400;
`;
