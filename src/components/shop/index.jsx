import React from "react";
import { Flex, Box } from "reflexbox";
import { Button } from "./button";

export const Shop = () => (
    <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        id="shop"
        pt={4}
        pb={5}
    >
        <Box width={["80%", "70%", "60%", "40%"]}>
            <h2>E-commerce CASTELLANA.UX®</h2>
        </Box>
        <Box width={["80%", "70%", "60%", "40%"]}>
            Grazie alla piattaforma e-commerce CASTELLANA.UX® potrai effettuare
            acquisti da piattaforma su PC, smartphone o tablet.
            <p>
                Registrati alla nostra community ed inizia ad effettuare i primi
                ordini.
            </p>
        </Box>
        <Box mt={3}>
            <Button />
        </Box>
    </Flex>
);
