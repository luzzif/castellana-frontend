import React from "react";
import { Flex, Box } from "reflexbox";
import { ImageStrip } from "./image-strip";

export const WhatDoWeOffer = () => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            id="what-do-we-offer"
            py={4}
        >
            <Box>
                <h2>Cosa offriamo</h2>
            </Box>
            <Box width={["80%", "70%", "60%", "50%"]} textAlign="center">
                <p>
                    Abbiamo un gruppo dedicato alla selezione e ricerca
                    giornaliera dei prodotti più particolari tra le eccellenze
                    italiane ed internazionali, questo ci consente di fornire
                    una proposta costantemente al passo con le esigenze del
                    mercato.
                </p>
                <p>
                    Il valore aggiunto è il continuo confronto con i nostri
                    professionisti, con i quali collaboriamo in ottica del
                    miglioramento senza sosta dei nostri servizi.
                </p>
                <p>
                    Per noi di Castellana la freschezza dei prodotti è
                    fondamentale per garantire la genuinità degli alimenti e la
                    loro piena espressione sulle tavole dei nostri clienti.
                </p>
            </Box>
            <ImageStrip />
        </Flex>
    );
};
