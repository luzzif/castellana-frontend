import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Box } from "reflexbox";
import {
    RootFlex,
    BackgroundImage,
    LogoImage,
    Slogan,
    StyledIcon,
    AbsoluteContainer,
    HighlightedText
} from "./styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SocialLink } from "../social-link";
import logoWhite from "../../images/logo-white.svg";

export const Hero = () => {
    const { heroImage } = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <>
            <BackgroundImage
                fluid={heroImage.childImageSharp.fluid}
                alt="Background image"
            ></BackgroundImage>
            <RootFlex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                px={4}
            >
                <Box py={3} width={["60%", "50%", "40%", "30%"]}>
                    <LogoImage src={logoWhite} alt="Logo" />
                </Box>
                <Box py={3} textAlign="center">
                    <Slogan>
                        Food service di qualità,{" "}
                        <HighlightedText>senza</HighlightedText> compromessi.
                    </Slogan>
                </Box>
                <Box py={3}>
                    <Flex mx={-1}>
                        <Box px={1}>
                            <SocialLink type="facebook" noText />
                        </Box>
                        <Box px={1}>
                            <SocialLink type="instagram" noText />
                        </Box>
                        <Box px={1}>
                            <SocialLink type="linkedin" noText />
                        </Box>
                    </Flex>
                </Box>
            </RootFlex>
            <AbsoluteContainer>
                <StyledIcon icon={faChevronDown} />
            </AbsoluteContainer>
        </>
    );
};
