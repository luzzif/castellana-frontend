import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Box } from "reflexbox";
import {
    RootFlex,
    BackgroundImage,
    LogoImage,
    CompanyName,
    Slogan,
    StyledIcon,
    AbsoluteContainer,
    StyledDivider
} from "./styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../divider";
import { SocialLink } from "../social-link";

export const Hero = () => {
    const { heroImage, logoImage } = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            logoImage: file(relativePath: { eq: "logo-white.png" }) {
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
            >
                <Box py={4}>
                    <LogoImage
                        fluid={logoImage.childImageSharp.fluid}
                        alt="Logo image"
                    />
                </Box>
                <Box py={4}>
                    <StyledDivider color="white" />
                </Box>
                <Box py={4}>
                    <Slogan>Food service di qualità, senza compromessi.</Slogan>
                </Box>
                <Box py={4}>
                    <Flex mx={-2}>
                        <Box px={2}>
                            <SocialLink type="facebook" />
                        </Box>
                        <Box px={2}>
                            <SocialLink type="instagram" />
                        </Box>
                        <Box px={2}>
                            <SocialLink type="linkedin" />
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
