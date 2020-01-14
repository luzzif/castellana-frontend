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
        <Box>
            <h2>Acquista</h2>
        </Box>
        <Box width="40%" textAlign="center">
            Tramite il nostro nuovo store online, la qualità da noi offerta non
            è mai stata così vicina e semplice da raggiungere. Scopri i nostri
            prodotti di prima scelta, a solo un click da te.
        </Box>
        <Box mt={44}>
            <Button />
        </Box>
    </Flex>
);
