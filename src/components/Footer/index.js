import React from 'react';
import { Container } from '../../globalStyles';
import {
  AliEslam,
  CopyRight,
  FacebookIcon,
  FooterContainer,
  Heading,
  InstagramIcon,
  Item,
  ItemList,
  ItemsList,
  LeftSide,
  Logo,
  LogoImg,
  RightSide,
  SocialIcons,
  Text,
  TwitterIcon,
} from './Footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Footer>
          <LeftSide>
            <Logo>
              <LogoImg src="../../images/Logo.png" />
            </Logo>
            <Text>
              SmartVPN is a private virtual network that has unique features and
              has high security.
            </Text>
            <SocialIcons>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </SocialIcons>
            <CopyRight>
              Coded By
              <AliEslam href="https://github.com/alizaeda"> Ali Eslam</AliEslam>
            </CopyRight>
          </LeftSide>
          <RightSide>
            <ItemsList>
              <Heading>Product</Heading>
              <ItemList>
                <Item>Download</Item>
                <Item>Pricing</Item>
                <Item>Locations</Item>
                <Item>Server</Item>
                <Item>Countries</Item>
                <Item>Blog</Item>
              </ItemList>
            </ItemsList>
            <ItemsList>
              <Heading>Engage</Heading>
              <ItemList>
                <Item>SmartVPN ?</Item>
                <Item>FAQ</Item>
                <Item>Tutorials</Item>
                <Item>About Us</Item>
                <Item>Privacy Policy</Item>
                <Item>Terms of Service</Item>
              </ItemList>
            </ItemsList>
            <ItemsList>
              <Heading>Earn Money</Heading>
              <ItemList>
                <Item>Affiliate</Item>
                <Item>Become Partner</Item>
              </ItemList>
            </ItemsList>
          </RightSide>
        </Footer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
