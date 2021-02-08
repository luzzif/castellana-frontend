import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RootContainer = styled.a`
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 24px;
    right: 24px;
    border-radius: 100%;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
    background: rgb(242, 129, 45);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow ease 0.2s;
    cursor: pointer;
    :hover {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 32px;
    color: #fff;
`;
