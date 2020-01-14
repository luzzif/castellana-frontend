import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const colorMap = {
    primary: css`
        background: #f2812d;
    `,
    white: css`
        background: #fff;
    `,
    black: css`
        background: #000;
    `
};

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    ${props => colorMap[props.color]};
`;

Divider.propTypes = {
    color: PropTypes.oneOf(["primary", "white", "black"])
};

Divider.defaultProps = {
    color: "black"
};
