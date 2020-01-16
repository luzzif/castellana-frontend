import React from "react";
import { Toolbar } from "./toolbar";
import { Main } from "./styled";
import { Footer } from "./footer";
import { ECommerceAlert } from "../e-commerce-alert";
import { useState } from "react";
import { useCallback } from "react";

export const Layout = ({ children }) => {
    const [show, setShow] = useState(true);

    const handleClose = useCallback(() => {
        setShow(false);
    }, []);

    return (
        <>
            <Toolbar />
            <Main>{children}</Main>
            <Footer />
            <ECommerceAlert show={show} onClose={handleClose} />
        </>
    );
};
