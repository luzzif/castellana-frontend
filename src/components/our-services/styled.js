import styled from "styled-components";
import Image from "gatsby-image";
import { Link } from "gatsby";

export const RoundedImage = styled(Image)`
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
    border-radius: 100%;
`;

export const WriteToUsLink = styled(Link)`
    color: #f2812d;
    text-decoration: underline;
`;
