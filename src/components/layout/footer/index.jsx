import React from "react";
import { Flex, Box } from "reflexbox";
import { Divider } from "../../divider";
import { SocialLink } from "../../social-link";
import { RootFlex, Logo, SectionTitle, CompanyInfoFlex } from "./styled";
import logoWhite from "../../../images/logo-white.svg";
import { UndecoratedLink } from "../../undecorated-link";

export const Footer = () => (
    <RootFlex
        py={[4, 5]}
        px={["24px", 4, 4, 5]}
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row"]}
    >
        <Flex
            flexWrap="wrap"
            textAlign={["center", "center", "center", "inherit"]}
        >
            <Box
                px={[3, 4, 4, 2]}
                mb={[4, 4, 4, 0]}
                width={[1 / 2, 1 / 2, 1 / 4]}
            >
                <Flex flexDirection="column">
                    <Box>
                        <SectionTitle>Su di noi</SectionTitle>
                    </Box>
                    <Box mb={2}>
                        <UndecoratedLink to="/#who-are-we">
                            Chi siamo
                        </UndecoratedLink>
                    </Box>
                    <Box mb={2}>
                        <UndecoratedLink to="/#what-do-we-offer">
                            Cosa offriamo
                        </UndecoratedLink>
                    </Box>
                    <Box>
                        <UndecoratedLink to="/#customers">
                            I nostri marchi
                        </UndecoratedLink>
                    </Box>
                </Flex>
            </Box>
            <Box
                px={[3, 4, 4, 2]}
                mb={[4, 4, 4, 0]}
                width={[1 / 2, 1 / 2, 1 / 4]}
            >
                <Flex flexDirection="column">
                    <Box>
                        <SectionTitle>Servizi</SectionTitle>
                    </Box>
                    <Box mb={2}>
                        <UndecoratedLink to="/#shop">
                            E-commerce
                        </UndecoratedLink>
                    </Box>
                    <Box mb={2}>
                        <UndecoratedLink to="/#synchronized-logistics">
                            Logistica
                        </UndecoratedLink>
                    </Box>
                    <Box mb={2}>
                        <UndecoratedLink to="/#cash-and-carry">
                            Cash&carry
                        </UndecoratedLink>
                    </Box>
                    <Box>
                        <UndecoratedLink to="/#cooking-hub">
                            Cooking hub
                        </UndecoratedLink>
                    </Box>
                </Flex>
            </Box>
            <Box
                px={[3, 4, 4, 2]}
                mb={[3, 3, 3, 0]}
                width={[1 / 2, 1 / 2, 1 / 4]}
            >
                <Flex flexDirection="column">
                    <Box>
                        <SectionTitle>Contattaci</SectionTitle>
                    </Box>
                    <Box mb={3}>
                        <UndecoratedLink to="/#write-to-us">
                            Scrivici
                        </UndecoratedLink>
                    </Box>
                </Flex>
            </Box>
            <Box
                px={[3, 4, 4, 2]}
                mb={[3, 3, 3, 0]}
                width={[1 / 2, 1 / 2, 1 / 4]}
            >
                <Flex flexDirection="column">
                    <Box>
                        <SectionTitle>Social</SectionTitle>
                    </Box>
                    <Flex
                        justifyContent={[
                            "center",
                            "center",
                            "center",
                            "inherit"
                        ]}
                    >
                        <Box>
                            <Divider color="primary" />
                        </Box>
                        <Box>
                            <SocialLink type="facebook" noText />
                        </Box>
                        <Box>
                            <SocialLink type="instagram" noText />
                        </Box>
                        <Box>
                            <SocialLink type="linkedin" noText />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
        <Flex
            display={[true, true, true, false]}
            mt={4}
            mb={4}
            justifyContent="center"
        >
            <Box width={["40%", "20%"]}>
                <Divider color="primary" />
            </Box>
        </Flex>
        <CompanyInfoFlex
            flexDirection="column"
            alignItems={["center", "center", "center", "flex-end"]}
            justifyContent="center"
            textAlign="center"
            fontSize="16px"
        >
            <Box mb={1} mt={[3, 4, 0]}>
                <b>Sede</b>: Via De Gasperi, 31, 74020, Monteiasi
            </Box>
            <Box mb={1}>
                <b>Partita IVA</b>: 02999070739
            </Box>
            <Box mb={3}>
                <b>Capitale sociale</b>: 10.000 EUR
            </Box>
            <Box>
                <Logo src={logoWhite} alt="Logo" />
            </Box>
        </CompanyInfoFlex>
    </RootFlex>
);
