import styled, { css } from "styled-components";
import { Flex } from "reflexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const commonStyle = css`
    position: fixed;
    background: #000;
    color: #fff;
    border-radius: 16px;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.6);
    z-index: 1000;
    ${props =>
        !props.show &&
        css`
            display: none !important;
        `}
`;

export const RootDesktopFlex = styled(Flex)`
    bottom: 24px;
    left: 24px;
    ${commonStyle}
`;

export const RootMobileFlex = styled(Flex)`
    bottom: 24px;
    right: 24px;
    left: 24px;
    ${commonStyle}
`;

export const CloseIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    display: flex;
    align-items: center;
`;
