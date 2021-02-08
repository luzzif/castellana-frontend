import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Input = styled.input`
    width: 100%;
    padding: 16px 24px;
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    font-size: 16px;
    outline: none;
    ::placeholder {
        color: #000;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 16px 24px;
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    font-size: 16px;
    outline: none;
    ::placeholder {
        color: #000;
    }
`;

export const StyledLink = styled.a`
    color: rgb(239, 124, 0);
    font-weight: 700;
    font-style: italic;
    margin-left: ${props => props.theme.spacing.unit}px;
`;

export const SubmitButton = styled.button`
    padding: 8px 16px;
    border-radius: 16px;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
    color: #fff;
    background: #f2812d;
    text-decoration: none;
    transition: box-shadow ease 0.3s, background ease 0.3s, color ease 0.3s;
    font-size: 16px;
    border: none;
    outline: none;
    :hover:not(:disabled) {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
    :disabled {
        background: #a9a9a9;
        color: #fff;
    }
`;

export const SuccessMessage = styled.div`
    color: #4caf50;
`;

export const ErrorMessage = styled.div`
    color: #f44336;
`;

export const SpacedIcon = styled(FontAwesomeIcon)`
    margin-right: 8px;
`;
