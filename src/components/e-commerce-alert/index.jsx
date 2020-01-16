import React from "react";
import { RootDesktopFlex, RootMobileFlex } from "./styled";
import { UndecoratedLink } from "../undecorated-link";
import { Box } from "reflexbox";

export const ECommerceAlert = () => (
    <>
        <RootDesktopFlex maxWidth="40%">
            <Box display={["none", "none", "flex"]} py={3} px={4}>
                <UndecoratedLink external href="http://castellana.netlify.com">
                    Clicca qui per scoprire la nuovissima piattaforma e-commerce
                    di Castellana, una novità assoluta.
                </UndecoratedLink>
            </Box>
        </RootDesktopFlex>
        <RootMobileFlex>
            <Box display={["flex", "flex", "none"]} py={3} px={4}>
                <UndecoratedLink external href="http://castellana.netlify.com">
                    Clicca qui per scoprire la nuovissima piattaforma e-commerce
                    di Castellana, una novità assoluta.
                </UndecoratedLink>
            </Box>
        </RootMobileFlex>
    </>
);
