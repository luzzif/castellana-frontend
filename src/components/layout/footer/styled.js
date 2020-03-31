import styled from "styled-components";
import { Flex } from "reflexbox";

export const RootFlex = styled(Flex)`
    background: #000;
    color: #fff;
    max-width: 100vw;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.19), 0 -6px 6px rgba(0, 0, 0, 0.23);
`;

export const Logo = styled.img`
    width: 100px;
    margin: 0;
`;

export const SectionTitle = styled.h3`
    color: #f2812d;
`;

export const CompanyInfoFlex = styled(Flex)`
    font-size: 16px;
`;
