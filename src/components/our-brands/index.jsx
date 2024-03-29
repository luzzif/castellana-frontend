import React from "react";
import { Flex, Box } from "reflexbox";

export const OurBrands = () => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            id="customers"
            py={4}
        >
            <Box>
                <h2>I nostri marchi</h2>
            </Box>
            <Box width={["80%", "70%", "60%", "40%"]}>
                Castellana s.r.l è partner nella distribuzione dei maggiori
                player nazionali ed internazionali del settore food & beverage
            </Box>
            <Box mt={5} width="100%">
                <Flex width="100%" justifyContent="center">
                    <Box width={["80%", "80%", "70%", "60%"]}>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            flexWrap="wrap"
                            textAlign="center"
                            mx={-4}
                        >
                            <Box
                                width={[1 / 2, 1 / 3, 1 / 4]}
                                px={4}
                                justifyContent="center"
                            >
                                <img
                                    src="//logo.clearbit.com/spotify.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 3, 1 / 4]} px={4}>
                                <img
                                    src="//logo.clearbit.com/facebook.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 3, 1 / 4]} px={4}>
                                <img
                                    src="//logo.clearbit.com/google.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 3, 1 / 4]} px={4}>
                                <img
                                    src="//logo.clearbit.com/microsoft.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 3]} px={4}>
                                <img
                                    src="//logo.clearbit.com/mcdonalds.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 3]} px={4}>
                                <img
                                    src="//logo.clearbit.com/stripe.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 3]} px={4}>
                                <img
                                    src="//logo.clearbit.com/atlassian.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
