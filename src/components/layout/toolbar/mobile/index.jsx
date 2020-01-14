import React from "react";
import PropTypes from "prop-types";
import { Item, StyledMobileMenuIcon } from "../styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Flex, Box } from "reflexbox";

export const MobileMenu = ({ onClose, ...rest }) => (
    <Flex flexDirection="column" alignItems="center" {...rest} py={3}>
        <Flex flexDirection="column" alignItems="center" my={-2}>
            <Box py={2}>
                <Item to="/#who-are-we" onClick={onClose}>
                    Chi siamo
                </Item>
            </Box>
            <Box py={2}>
                <Item to="/#what-do-we-offer" onClick={onClose}>
                    Cosa offriamo
                </Item>
            </Box>
            <Box py={2}>
                <Item to="/#shop" onClick={onClose}>
                    Acquista
                </Item>
            </Box>
            <Box py={2}>
                <Item to="/#customers" onClick={onClose}>
                    I nostri clienti
                </Item>
            </Box>
        </Flex>
        <Flex width="80%" justifyContent="flex-end">
            <Box>
                <StyledMobileMenuIcon icon={faTimes} onClick={onClose} />
            </Box>
        </Flex>
    </Flex>
);

MobileMenu.propTypes = {
    onClose: PropTypes.func.isRequired
};
