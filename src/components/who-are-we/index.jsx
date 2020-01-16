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
            Castellana s.r.l. è un’azienda di famiglia che opera nel settore
            della distribuzione food & beverage, distribuendo in Italia e
            all’estero le eccellenze del mercato nazionale ed internazionale
            sulle tavole dei nostri clienti.
        </Box>
    </Flex>
);
