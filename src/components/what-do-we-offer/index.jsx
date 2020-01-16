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
            <Box width={["80%", "70%", "60%", "40%"]}>
                Castellana s.r.l. vanta un gruppo dedicato alla selezione e
                ricerca giornaliera di nuovi prodotti, consentendoci di fornire
                una proposta al passo con le esigenze del mercato.
            </Box>
            <ImageStrip />
        </Flex>
    );
};
