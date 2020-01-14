import React from "react";
import { ThemeProvider } from "styled-components";
import { Toolbar } from "./toolbar";
import { Main } from "./styled";

export const Layout = ({ children }) => (
    <>
        <Toolbar />
        <Main>{children}</Main>
    </>
);
