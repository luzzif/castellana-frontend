import styled, { keyframes } from "styled-components";
import { Flex } from "reflexbox";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "../divider";

export const BackgroundImage = styled(Image)`
    position: relative;
    width: 100vw;
    height: 100vh;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
`;

export const RootFlex = styled(Flex)`
    background: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

export const LogoImage = styled(Image)`
    width: 20vw;
`;

export const Slogan = styled.span`
    font-size: 1.5em;
    color: #fff;
`;

export const AbsoluteContainer = styled.div`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
`;

const wobble = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
  
  100% {
    transform: translateY(0);
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 40px;
    animation: ${wobble} 1s ease infinite;
`;

export const StyledDivider = styled(Divider)`
    width: 10vw;
`;
