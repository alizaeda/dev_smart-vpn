import styled, { createGlobalStyle } from "styled-components";

const size = {
  small: "480px",
  medium: "786px",
  large: "1024px",
  xlarge: "1440px",
  xxlarge: "1920px",
};

export const device = {
  small: `(max-width: ${size.small})`,
  medium: `(max-width: ${size.medium})`,
  large: `(max-width: ${size.large})`,
  xlarge: `(max-width: ${size.xlarge})`,
  xxlarge: `(max-width: ${size.xxlarge})`,
};

const GlobalStyle = createGlobalStyle`


  :root {
    --primary: #0B132A;
    --red: #F53838;
    --red-alt: #F53855;
    --secondary: #F7F7F7;
    --gray: #4F5665;

    // font size
    --f1: 14px;
    --f2: 18px;
    --f3: 20px;
    --f4: 25px;
    --f5: 35px;
    --f6: 50px;  

    // spacing
    --s1: 10px;
    --s2: 20px;
    --s3: 30px;
    --s4: 40px;
    --s5: 50px;
    --s6: 60px;
    --s7: 70px;
    --s8: 80px;
    --s9: 90px;
    --s10: 100px;
    --s11: 110px;
    --s12: 120px;

    // border radius
    --br1: 10px;
    --br2: 50px;
    --br3: 50%;

    // transition
    --transition: all 0.2s ease-in-out;

    // box shadow
    --bs1: 4px 10px 7px 5px rgba(109, 108, 108, 0.027);
    --bs2: 4px 5px 5px 2px rgba(247, 45, 45, 0.13);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }



  body {
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    color: var(--color-primary);
  }

  ::-webkit-scrollbar {
    width: 7px;
    background-color: #ccc;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--red);
    border-radius: 4px;
  }

`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;

  @media ${device.medium} {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const SectionHeader = styled.h2`
  width: 383.41px;
  font-size: var(--f5);
  line-height: 50px;
  color: var(--primary);
  text-align: center;
  font-weight: 500;
  margin: 0 auto 20px;
`;

export const SectionDesc = styled.p`
  width: 555px;
  font-weight: 500;
  line-height: 30px;
  color: var(--gray);
  text-align: center;
  margin: auto;
`;

export default GlobalStyle;
