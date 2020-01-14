import React from "react";
import { Flex, Box } from "reflexbox";

export const Customers = () => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            id="customers"
            py={4}
        >
            <Box>
                <h2>I nostri clienti</h2>
            </Box>
            <Box width="40%" textAlign="center">
                Castellana fornisce già alcuni dei più illustri nomi nella
                ristorazione italiana. Entra a far parte della folta lista e
                goditi i numerosi vantaggi da noi offerti.
            </Box>
            <Box mt={5} width="100%">
                <Flex width="100%" justifyContent="center">
                    <Box width="60%">
                        <Flex justifyContent="space-around" alignItems="center">
                            <Box>
                                <img
                                    src="//logo.clearbit.com/spotify.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box>
                                <img
                                    src="//logo.clearbit.com/facebook.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box>
                                <img
                                    src="//logo.clearbit.com/google.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box>
                                <img
                                    src="//logo.clearbit.com/microsoft.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                        </Flex>
                        <Flex
                            justifyContent="space-around"
                            alignItems="center"
                            mt={3}
                        >
                            <Box>
                                <img
                                    src="//logo.clearbit.com/mcdonalds.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box>
                                <img
                                    src="//logo.clearbit.com/stripe.com?size=100&greyscale=true"
                                    alt="Logo"
                                />
                            </Box>
                            <Box>
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
