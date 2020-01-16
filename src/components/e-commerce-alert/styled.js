import styled, { css } from "styled-components";
import { Flex } from "reflexbox";

const commonStyle = css`
    position: fixed;
    background: #f2812d;
    color: #fff;
    border-radius: 16px;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
    ${props =>
        !props.show &&
        css`
            display: none !important;
        `}
`;

export const RootDesktopFlex = styled(Flex)`
    bottom: 24px;
    right: 24px;
    ${commonStyle}
`;

export const RootMobileFlex = styled(Flex)`
    bottom: 24px;
    right: 24px;
    left: 24px;
    ${commonStyle}
`;
