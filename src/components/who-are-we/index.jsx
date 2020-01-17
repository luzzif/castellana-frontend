import React from "react";
import { Flex, Box } from "reflexbox";

export const WhoAreWe = () => (
    <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        id="who-are-we"
        mt={5}
        mb={4}
    >
        <Box>
            <h2>Chi siamo</h2>
        </Box>
        <Box width={["80%", "70%", "60%", "40%"]}>
            <p>
                Castellana s.r.l. è un’azienda di famiglia che opera nel settore
                della distribuzione food & beverage, distribuendo in Italia e
                all’estero le eccellenze del mercato nazionale ed internazionale
                sulle tavole dei nostri clienti.
            </p>
            <p>
                Con più di 4800 articoli sempre disponibili e conservati in
                un'area di 7000mq totali, di cui 1000 di celle figorifere,
                trasportati dalla flotta dei nostri 15 furgoni attrezzati e con
                le nostre certificazioni in ambito organizzativo non temiamo
                rivali.
            </p>
        </Box>
    </Flex>
);
