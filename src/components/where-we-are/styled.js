import styled from "styled-components";
import { Map, Popup, Marker } from "react-leaflet";

export const StyledMap = styled(Map)`
    height: 400px;
    box-shadow: 0px 10px 42px 0px rgba(0, 0, 0, 0.4);
`;

export const StyledPopup = styled(Popup)`
    font-family: Muli;
    font-size: 20px;
`;
