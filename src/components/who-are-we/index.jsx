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
        <Box width={["80%", "70%", "60%", "50%"]} textAlign="center">
            <p>
                Castellana SRL è un'azienda di famiglia che opera nel settore
                della distribuzione food & beverage, resa sempre giovane e
                dinamica dall'impegno dei suoi proprietari.
            </p>
            <p>
                La ricerca di prodotti per la ristorazione sempre
                all'avanguardia, l'orientamento alla piena soddisfazione dei
                clienti per la nostra merce e per i nostri servizi, oltre che,
                ad un sistema logistico e distributivo sempre pronto ed in
                evoluzione, è ciò che ci rende orgogliosi del lavoro che
                svolgiamo, ogni giorno, con passione.
            </p>
            <p>
                Vogliamo portare le eccellenze del mercato nazionale ed
                internazionale sulle tavole dei nostri clienti. Per questo
                motivo, siamo in continuo aggiornamento, sicuri che, solo in
                questo modo, manterremo sempre elevati standard qualitativi.
            </p>
        </Box>
    </Flex>
);
