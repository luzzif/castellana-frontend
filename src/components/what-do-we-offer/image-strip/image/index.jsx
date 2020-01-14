import React from "react";
import PropTypes from "prop-types";
import { AbsoluteContainer } from "./styled";
import { Flex, Box } from "reflexbox";
import GatsbyImage from "gatsby-image";

export const Image = ({ sizes, alt, text }) => (
    <>
        <GatsbyImage sizes={sizes} alt={alt} />
        <AbsoluteContainer>
            <Flex
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
            >
                <Box>{text}</Box>
            </Flex>
        </AbsoluteContainer>
    </>
);

Image.propTypes = {
    sizes: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired
};
