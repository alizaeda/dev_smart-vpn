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
  @media ${device.medium} {
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
  @media ${device.medium} {
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
