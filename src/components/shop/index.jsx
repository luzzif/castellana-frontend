import React from "react";
import { Flex, Box } from "reflexbox";
import { Button } from "./button";
import { CustomLink } from "../custom-link";

export const Shop = () => (
    <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        id="shop"
        mt={4}
        mb={5}
    >
        <Box width={["80%", "70%", "60%", "40%"]} textAlign="center">
            <h2>E-commerce CASTELLANA.UX®</h2>
        </Box>
        <Box width={["80%", "70%", "60%", "40%"]} mb={3}>
            Grazie alla piattaforma e-commerce CASTELLANA.UX® potrai effettuare
            acquisti da piattaforma su PC, smartphone o tablet.
            <p>
                Registrati alla nostra community ed inizia ad effettuare i primi
                ordini.
            </p>
        </Box>
        <Box mb={3}>
            <Button />
        </Box>
        <Box mt={3} width={["80%", "70%", "60%", "40%"]}>
            In alternativa, scopri la nostra selezione di prodotti sfogliando il
            nostro volantino, semplicemente cliccando{" "}
            <CustomLink underlined external primary>
                qui
            </CustomLink>
        </Box>
    </Flex>
);
