import React from "react";
import { CookiesProvider } from "react-cookie";

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
        easing: "easeInOutQuad",
        offset: 100
    });
}

export const wrapRootElement = ({ element }) => (
    <CookiesProvider>{element}</CookiesProvider>
);
