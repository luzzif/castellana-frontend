import React from "react";
import { Box } from "reflexbox";
import { RootFlex } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Button = () => (
    <RootFlex py={3} px={3}>
        <Box mx={2}>
            <FontAwesomeIcon icon={faShoppingCart} />
        </Box>
        <Box mx={2}>Scopri i nostri prodotti</Box>
    </RootFlex>
);
