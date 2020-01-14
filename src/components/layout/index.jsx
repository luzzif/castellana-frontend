import React from "react";
import { Toolbar } from "./toolbar";
import { Main } from "./styled";

export const Layout = ({ children }) => (
    <>
        <Toolbar />
        <Main>{children}</Main>
    </>
);
