import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const LATITUDE = 40.49992;
const LONGITUDE = 17.3826;
const ZOOM = 14;

export const WhereAreWe = () => {
    if (typeof window !== "undefined") {
        return (
            <Map
                center={[LATITUDE, LONGITUDE]}
                zoom={ZOOM}
                style={{
                    height: 400,
                    boxShadow: "0px 10px 42px 0px rgba(0, 0, 0, 0.4)"
                }}
            >
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[LATITUDE, LONGITUDE]}>
                    <Popup>Castellana s.r.l</Popup>
                </Marker>
            </Map>
        );
    }
    return null;
};
