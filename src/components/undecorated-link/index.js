import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const commonStyle = css`
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    :visited {
        color: inherit;
    }
`;

export const UndecoratedLink = ({ external, children, ...rest }) => {
    const Component = external
        ? styled.a`
              ${commonStyle}
          `
        : styled(Link)`
              ${commonStyle}
          `;
    return <Component {...rest}>{children}</Component>;
};

UndecoratedLink.propTypes = {
    external: PropTypes.bool
};
