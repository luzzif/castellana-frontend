import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Box } from "reflexbox";
import Image from "gatsby-image";
import { Divider } from "../../divider";
import { SocialLink } from "../../social-link";
import { RootFlex, SectionTitle } from "./styled";

export const Footer = () => {
    const { logoWhiteImage } = useStaticQuery(graphql`
        query {
            logoWhiteImage: file(relativePath: { eq: "logo-white.png" }) {
                childImageSharp {
                    fixed(height: 52) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <RootFlex py={5} px={5} mx={-4} justifyContent="space-between">
            <Flex>
                <Box px={4}>
                    <Flex flexDirection="column">
                        <Box>
                            <SectionTitle>Chi siamo</SectionTitle>
                        </Box>
                        <Box mb={3}>
                            <Divider color="primary" />
                        </Box>
                        <Box mb={2}>Azienda</Box>
                        <Box mb={2}>Prodotti</Box>
                        <Box>Business</Box>
                    </Flex>
                </Box>
                <Box px={4}>
                    <Flex flexDirection="column">
                        <Box>
                            <SectionTitle>I nostri servizi</SectionTitle>
                        </Box>
                        <Box mb={3}>
                            <Divider color="primary" />
                        </Box>
                        <Box mb={2}>E-commerce</Box>
                        <Box mb={2}>Logistica sincronizzata</Box>
                        <Box>Cash&carry</Box>
                    </Flex>
                </Box>
                <Box px={4}>
                    <Flex flexDirection="column">
                        <Box>
                            <SectionTitle>Contattaci</SectionTitle>
                        </Box>
                        <Box mb={3}>
                            <Divider color="primary" />
                        </Box>
                        <Box mb={3}>Collabora con noi</Box>
                        <Box>
                            <Flex mx={-3}>
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
                    </Flex>
                </Box>
            </Flex>
            <Flex flexDirection="column" alignItems="flex-end">
                <Box mb={4}>
                    <Image fixed={logoWhiteImage.childImageSharp.fixed} />
                </Box>
                <Box mb={2}>
                    <b>Sede legale</b>: Via De Gasperi, 31, 74020, Monteiasi
                </Box>
                <Box mb={2}>
                    <b>Partita IVA</b>: 02999070739
                </Box>
                <Box mb={2}>
                    <b>Capitale sociale</b>: 10.000 EUR
                </Box>
            </Flex>
        </RootFlex>
    );
};
