import React from "react";
import { Marker, TileLayer } from "react-leaflet";
import { StyledMap, StyledPopup } from "./styled";

const LATITUDE = 40.49992;
const LONGITUDE = 17.3826;
const ZOOM = 14;

export const WhereAreWe = () => (
    <StyledMap center={[LATITUDE, LONGITUDE]} zoom={ZOOM}>
        <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[LATITUDE, LONGITUDE]}>
            <StyledPopup>Castellana s.r.l</StyledPopup>
        </Marker>
    </StyledMap>
);
