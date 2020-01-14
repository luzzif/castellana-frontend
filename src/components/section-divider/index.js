import React from "react";
import styled from "styled-components";
import { Divider } from "../divider";

const StyledDivider = styled(Divider)`
    width: 20vw;
    margin: 16px auto;
`;

export const SectionDivider = () => <StyledDivider color="primary" />;
