import React from "react";
import { Toolbar } from "./toolbar";
import { Main } from "./styled";
import { Footer } from "./footer";

export const Layout = ({ children }) => (
    <>
        <Toolbar />
        <Main>{children}</Main>
        <Footer />
    </>
);
