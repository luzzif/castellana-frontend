import { Flex } from "reflexbox";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileMenu } from "./mobile";

export const Container = styled(Flex)`
    height: 80px;
    padding: 0 32px;
    background: rgba(242, 129, 45, ${props => (props.hero ? 0 : 1)});
    color: ${props => (props.hero ? "#fff" : "#000")};
    box-shadow: ${props =>
        props.hero
            ? 0
            : css`0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)`};
    transition: background ease 0.2s, box-shadow ease 0.2s, color ease 0.2s;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
`;

export const LogoImage = styled.img`
    height: 52px;
    margin: 0;
`;

export const Item = styled(Link)`
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
`;

export const AnimatedMobileMenu = styled(MobileMenu)`
    position: fixed;
    right: 0;
    left: 0;
    top: ${props => (props.open ? "0" : "-100%")};
    background: #fff;
    color: #000;
    transition: top ease 0.3s;
    z-index: 11;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
`;

export const StyledMobileMenuIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
`;
