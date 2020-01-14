import React, { useState, useEffect } from "react";
import { Container, Item, LogoImage } from "./styled";
import { Flex, Box } from "reflexbox";
import logoBlack from "../../../images/logo-black.svg";
import logoWhite from "../../../images/logo-white.svg";

export const Toolbar = () => {
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
                <LogoImage src={hero ? logoWhite : logoBlack} alt="Logo" />
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
