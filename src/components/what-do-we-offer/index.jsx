import React from "react";
import { Flex, Box } from "reflexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
    faDrumstickBite,
    faCarrot,
    faBacon,
    faEgg,
    faFish,
    faCheese
} from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
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
            <Box width="40%" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </Box>
            <ImageStrip />
        </Flex>
    );
};
