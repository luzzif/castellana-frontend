import React, { useState, useEffect } from "react";
import { Container, Item } from "./styled";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Flex, Box } from "reflexbox";

export const Toolbar = () => {
    const { logoBlackImage, logoWhiteImage } = useStaticQuery(graphql`
        query {
            logoBlackImage: file(relativePath: { eq: "logo-black.png" }) {
                childImageSharp {
                    fixed(height: 52) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            logoWhiteImage: file(relativePath: { eq: "logo-white.png" }) {
                childImageSharp {
                    fixed(height: 52) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const [hero, setHero] = useState(
        !(typeof window !== "undefined" && window.pageYOffset)
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setHero(!window.pageYOffset);
    };

    return (
        <Container
            alignItems="center"
            justifyContent="space-between"
            hero={hero}
        >
            <Box>
                <Image
                    fixed={
                        hero
                            ? logoWhiteImage.childImageSharp.fixed
                            : logoBlackImage.childImageSharp.fixed
                    }
                    alt="Mini logo"
                />
            </Box>
            <Box>
                <Flex mx={-3} justifyContent="flex-end">
                    <Box px={3}>
                        <Item to="/#who-are-we">Chi siamo</Item>
                    </Box>
                    <Box px={3}>
                        <Item to="/#what-do-we-offer">Cosa offriamo</Item>
                    </Box>
                    <Box px={3}>
                        <Item to="/#shop">Acquista</Item>
                    </Box>
                    <Box px={3}>
                        <Item to="/#customers">I nostri clienti</Item>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};
