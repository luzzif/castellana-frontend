import React from "react";
import { Toolbar } from "./toolbar";
import { Main } from "./styled";
import { Footer } from "./footer";
import { CookiesAlert } from "../cookies-alert";
import { useCookies } from "react-cookie";
import { useCallback } from "react";

const cookiesAlertHiddenCookieName = "cookies-alert-hidden";

export const Layout = ({ children }) => {
    const [cookies, setCookie] = useCookies([cookiesAlertHiddenCookieName]);

    const handleClose = useCallback(() => {
        setCookie(cookiesAlertHiddenCookieName, true, {
            expires: new Date(Date.now() + 31557600000)
        });
    }, [setCookie]);

    return (
        <>
            <Toolbar />
            <Main>{children}</Main>
            <Footer />
            <CookiesAlert
                show={
                    !(
                        cookies[cookiesAlertHiddenCookieName] &&
                        cookies[cookiesAlertHiddenCookieName] === "true"
                    )
                }
                onClose={handleClose}
            />
        </>
    );
};
