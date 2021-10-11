import styled from "styled-components";
import { device } from "../../globalStyles";

export const PricingSection = styled.section``;

export const HeaderContent = styled.div`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 60px;
`;

export const Heading = styled.h2`
  font-size: var(--f5);
  margin-bottom: 20px;
  color: var(--primary);
  font-weight: 500;
`;

export const Text = styled.p`
  color: var(--gray);
  line-height: 30px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.medium} {
    flex-direction: column;
    align-items: center;
  }
`;
