import React from "react";
import { Flex, Box } from "reflexbox";
import { Divider } from "../../divider";
import { SocialLink } from "../../social-link";
import { RootFlex, h3, Logo } from "./styled";
import logoWhite from "../../../images/logo-white.svg";

export const Footer = () => (
    <RootFlex py={5} px={5} mx={-4} justifyContent="space-between">
        <Flex>
            <Box px={4}>
                <Flex flexDirection="column">
                    <Box>
                        <h3>Chi siamo</h3>
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
                        <h3>I nostri servizi</h3>
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
                        <h3>Contattaci</h3>
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
            <Box mb={2}>
                <Logo src={logoWhite} alt="Logo" />
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
