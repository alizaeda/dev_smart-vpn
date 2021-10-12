import styled from "styled-components";
import { device, SectionHeader } from "../../globalStyles";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const TestimonialSection = styled.section`
  margin-bottom: 65px;
`;

export const SectionHeading = styled.div`
  margin-bottom: 60px;
`;

export const Heading = styled(SectionHeader)`
  width: 447.81px;
`;

export const TestimonialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${device.medium} {
    flex-direction: column;
  }
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftIndicators = styled.div`
  display: flex;
`;

export const Indicator = styled.div`
  /* background-color: ${({ active }) => (active ? "#00bcd4" : "#e0e0e0")}; */
  width: 15px;
  height: 15px;
  background-color: #dde0e4;
  border-radius: var(--br3);
  cursor: not-allowed;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:first-child {
    background-color: var(--red);
    height: 15px;
    width: 45px;
    border-radius: 25px;
  }
`;

export const RightIndicators = styled.div``;

export const IconLeft = styled(BsFillArrowLeftCircleFill)`
  width: 60px;
  height: 60px;
  color: var(--red);
  cursor: not-allowed;
`;

export const IconRight = styled(BsFillArrowRightCircleFill)`
  width: 60px;
  height: 60px;
  margin-left: 20px;
  color: var(--red);
  cursor: not-allowed;
`;
