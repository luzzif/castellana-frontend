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
        <Box width={["80%", "70%", "60%", "50%"]} textAlign="center">
            <p>
                È finalmente on-line la nostra piattaforma e-commerce
                <b> CASTELLANA.UX® </b>
                sempre aggiornata e dalla quale potrete effettuare acquisti
                real-time in modo semplice e veloce. In questo modo avrete uno
                strumento chiaro e veloce per effettuare le vostre operazioni
                comodamente on-line da qualsiasi pc, smartphone o tablet, per
                una user experience (UX) senza eguali.
            </p>
            <p>
                Registrati alla nostra community ed inizia ad effettuare i primi
                ordini.
            </p>
        </Box>
        <Box mt={44}>
            <Button />
        </Box>
    </Flex>
);
