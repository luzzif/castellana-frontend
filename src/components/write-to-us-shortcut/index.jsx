import React from "react";
import { RootContainer, StyledIcon } from "./styled";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export const WriteToUsShortcut = () => (
    <RootContainer href="/#write-to-us">
        <StyledIcon icon={faComments} size={80} />
    </RootContainer>
);
