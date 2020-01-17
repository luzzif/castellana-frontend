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
                della distribuzione food & beverage.
            </p>
            <p>
                Gestiamo più di <b>#4800 articoli</b>, conservati nei nostri{" "}
                <b>#2 </b>
                building di <b>#7000mq</b> totali, dotati di <b>#4</b> celle
                frigo di <b>#1000mq </b>
                totali (da -40°C, -20°C, 4°C), trasportati dalla flotta dei
                nostri <b>#15</b> furgoni attrezzati.
            </p>
            <p>
                Vantiamo un gruppo dedicato alla selezione e ricerca giornaliera
                di nuovi prodotti, per essere sempre al passo con le esigenze
                del mercato.
            </p>
            <p>
                Disponiamo di un sistema di gestione qualità organizzato e
                strutturato in modo da offrire i prodotti migliori alle migliori
                condizioni, ottimizzando costi, sprechi e soddisfacendo le
                richieste della nostra clientela.
            </p>
        </Box>
    </Flex>
);
