import React from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { StyledMap } from "./styled";

const LATITUDE = 40.49992;
const LONGITUDE = 17.3826;
const ZOOM = 12;

export const WhereAreWe = () => (
    <StyledMap center={[LATITUDE, LONGITUDE]} zoom={ZOOM}>
        <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[LATITUDE, LONGITUDE]}>
            <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
            </Popup>
        </Marker>
    </StyledMap>
);
