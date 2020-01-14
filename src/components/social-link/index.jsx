import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "reflexbox";
import { UndecoratedLink } from "../undecorated-link";
import { RootFlex } from "./styled";

// TODO: put proper links
const socialInfo = {
    facebook: {
        icon: faFacebook,
        url: "https://www.facebook.com",
        name: "Facebook"
    },
    instagram: {
        icon: faInstagram,
        url: "https://instagram.com",
        name: "Instagram"
    },
    linkedin: {
        icon: faLinkedin,
        url: "https://linkedin.com",
        name: "Linkedin"
    }
};

export const SocialLink = ({ type, noText }) => {
    const socialSpecificInfo = socialInfo[type];
    return (
        <UndecoratedLink
            href={socialSpecificInfo.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <RootFlex
                type={type}
                mx={2}
                alignItems="center"
                justifyContent="center"
                noText={noText}
            >
                <Box px={!noText && 2}>
                    <FontAwesomeIcon icon={socialSpecificInfo.icon} />
                </Box>
                {!noText && <Box px={2}>{socialSpecificInfo.name}</Box>}
            </RootFlex>
        </UndecoratedLink>
    );
};

SocialLink.propTypes = {
    type: PropTypes.oneOf(["facebook", "instagram", "linkedin"]).isRequired,
    noText: PropTypes.bool
};
