import { Flex } from "reflexbox";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const Item = styled(Link)`
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
`;

export const StyledMobileMenuIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
`;
