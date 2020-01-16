import React from "react";
import PropTypes from "prop-types";
import { RootDesktopFlex, RootMobileFlex } from "./styled";
import { UndecoratedLink } from "../undecorated-link";
import { Box } from "reflexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const ECommerceAlert = ({ show, onClose }) => (
    <>
        <RootDesktopFlex
            show={show}
            display={["none", "none", "flex"]}
            maxWidth="40%"
            py={3}
            px={4}
        >
            <Box display={["none", "none", "flex"]} mr={2}>
                <UndecoratedLink external href="http://castellana.netlify.com">
                    Clicca qui per scoprire la nuovissima piattaforma e-commerce
                    di Castellana, una novità assoluta.
                </UndecoratedLink>
            </Box>
            <Box display={["none", "none", "flex"]}>
                <FontAwesomeIcon icon={faTimes} onClick={onClose} />
            </Box>
        </RootDesktopFlex>
        <RootMobileFlex
            show={show}
            display={["flex", "flex", "none"]}
            py={3}
            px={4}
        >
            <Box display={["flex", "flex", "none"]}>
                <UndecoratedLink external href="http://castellana.netlify.com">
                    Clicca qui per scoprire la nuovissima piattaforma e-commerce
                    di Castellana, una novità assoluta.
                </UndecoratedLink>
            </Box>
            <Box display={["flex", "flex", "none"]}>
                <FontAwesomeIcon icon={faTimes} onClick={onClose} />
            </Box>
        </RootMobileFlex>
    </>
);

ECommerceAlert.propTypes = {
    onClose: PropTypes.func.isRequired
};
