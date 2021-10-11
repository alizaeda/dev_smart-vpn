import styled from "styled-components";
import { device } from "../../globalStyles";

export const SectionHeading = styled.div`
  margin-bottom: 155.8px;

  @media ${device.mobile} {
    margin-bottom: 40px;
  }
`;

export const SectionImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 83.8px;
`;

export const Sponsers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 83.67px;

  @media ${device.medium} {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  filter: grayscale(1);
  transition: var(--transition);
  &:hover {
    filter: grayscale(0);
    transform: scale(1.03);
  }

  @media ${device.medium} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
