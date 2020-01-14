import styled, { keyframes } from "styled-components";
import { Flex } from "reflexbox";

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

export const RootFlex = styled(Flex)`
    border-radius: 16px;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
    color: #fff;
    background: #f2812d;
    transition: box-shadow ease 0.3s;
    border: none;
    animation: ${pulse} 1.5s ease infinite;
    :hover {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
`;
