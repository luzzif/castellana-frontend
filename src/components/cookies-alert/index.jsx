import React from "react";
import PropTypes from "prop-types";
import { RootDesktopFlex, RootMobileFlex, CloseIcon } from "./styled";
import { Box } from "reflexbox";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const CookiesAlert = ({ show, onClose }) => (
    <>
        <RootDesktopFlex
            show={show}
            display={["none", "none", "flex"]}
            maxWidth="40%"
            py={3}
            px={4}
        >
            <Box display={["none", "none", "flex"]} mr={2}>
                Utilizzando il sito acconsenti all'utilizzo dei cookies.
            </Box>
            <Box display={["none", "none", "flex"]}>
                <CloseIcon icon={faTimes} onClick={onClose} />
            </Box>
        </RootDesktopFlex>
        <RootMobileFlex
            show={show}
            display={["flex", "flex", "none"]}
            py={3}
            px={4}
        >
            <Box display={["flex", "flex", "none"]}>
                Questo sito fa uso di cookie per migliorare l’esperienza di
                navigazione degli utenti e per raccogliere informazioni
                sull’utilizzo del sito stesso. Proseguendo nella navigazione si
                accetta l’uso dei cookie; in caso contrario è possibile
                abbandonare il sito.
            </Box>
            <Box display={["flex", "flex", "none"]}>
                <CloseIcon icon={faTimes} onClick={onClose} />
            </Box>
        </RootMobileFlex>
    </>
);

CookiesAlert.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
