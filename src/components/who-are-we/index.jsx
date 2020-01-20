import React from "react";
import { Flex, Box } from "reflexbox";
import { CustomLink } from "../custom-link";

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
                Gestiamo più di #4800 articoli, conservati nei nostri #2
                building di #7000mq totali, dotati di #4 celle frigo di #1000mq
                totali (da -40°C, -20°C, 4°C), trasportati dalla flotta dei
                nostri #15 furgoni attrezzati.
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
            <p>
                <CustomLink primary underlined>
                    Scarica il certificato
                </CustomLink>
            </p>
        </Box>
    </Flex>
);
