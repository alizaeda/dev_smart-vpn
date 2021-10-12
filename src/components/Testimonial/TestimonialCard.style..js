import styled from "styled-components";

export const CardContainer = styled.div`
  width: 400px;
  height: 230px;
  padding: 30px;
  border: 2px solid #ddd;
  border-radius: var(--br1);
  margin-bottom: 82.5px;
  transition: var(--transition);
  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    border-color: var(--red);

    transform: scale(1.02);
    transform: translateY(-5px);
  }
`;
export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 70px 200px auto;
  margin-bottom: 20px;
`;
export const CardTitle = styled.h2``;

export const Name = styled.h2`
  margin-bottom: 5px;
  font-size: var(--f2);
  font-weight: 500;
`;

export const Location = styled.p`
  font-size: var(--f1);
  color: var(--gray);
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: var(--br3);
  margin-right: 20px;
`;

export const Rate = styled.span`
  grid-column: none;
  align-self: center;
  color: var(--primary);
  display: flex;
`;
export const CardText = styled.p`
  line-height: 25px;
  color: var(--primary);
`;
