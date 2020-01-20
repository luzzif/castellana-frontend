import React, { useState, useEffect } from "react";
import {
    Container,
    Item,
    LogoImage,
    AnimatedMobileMenu,
    StyledMobileMenuIcon
} from "./styled";
import { Flex, Box } from "reflexbox";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../../images/logo-white.svg";

export const Toolbar = () => {
    const [hero, setHero] = useState(
        !(typeof window !== "undefined" && window.pageYOffset)
    );
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setHero(!window.pageYOffset);
    };

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <AnimatedMobileMenu
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
            />
            <Container
                alignItems="center"
                justifyContent="space-between"
                hero={hero}
            >
                <Box>
                    <LogoImage src={logoWhite} alt="Logo" />
                </Box>
                <Box display={["none", "none", "flex"]}>
                    <Flex mx={-3} justifyContent="flex-end">
                        <Box px={3}>
                            <Item to="/#who-are-we">Chi siamo</Item>
                        </Box>
                        <Box px={3}>
                            <Item to="/#shop">Acquista</Item>
                        </Box>
                        <Box px={3}>
                            <Item to="/#our-services">I nostri servizi</Item>
                        </Box>
                        <Box px={3}>
                            <Item to="/#customers">I nostri marchi</Item>
                        </Box>
                    </Flex>
                </Box>
                <Box display={["flex", "flex", "none"]}>
                    <StyledMobileMenuIcon
                        mobile
                        icon={faBars}
                        onClick={handleMobileMenuOpen}
                    />
                </Box>
            </Container>
        </>
    );
};
