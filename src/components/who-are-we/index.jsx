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
                della distribuzione del food & beverage.
            </p>
            <p>
                Gestiamo più di 4800 articoli, conservati nei nostri capannoni
                da 7000mq (dotati di celle frigo da -40°C a 4°C), trasportati
                dalla flotta di furgoni attrezzati.
            </p>
            <p>
                Vantiamo un gruppo dedicato alla selezione e ricerca giornaliera
                di nuovi prodotti, e disponiamo di un sistema di gestione
                qualità (certificato ISO 9001) che ci garantisce
                l’ottimizzazione degli sprechi e dei costi.
            </p>
        </Box>
    </Flex>
);
