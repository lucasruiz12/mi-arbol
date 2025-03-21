import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Spinner from 'react-bootstrap/Spinner';

const MapView = ({ loading, markers, center }) => {
    const {
        VITE_GOOGLE_API_KEY,
    } = import.meta.env;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: VITE_GOOGLE_API_KEY,
    });

    if (loading || !isLoaded) return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", backgroundColor: "#C8D390", filter: "opacity(50%)", borderRadius: "8px" }}>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        </div>
    );

    return (
        <GoogleMap
            center={{ lat: parseFloat(center.lat), lng: parseFloat(center.lng) }}
            zoom={9}
            mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "8px" }}
        >
            {
                markers.map((el, idx) => {
                    return (
                        <Marker key={idx} position={{ lat: parseFloat(el.google_coordinates_lat), lng: parseFloat(el.google_coordinates_lng) }} />
                    );
                })
            }
        </GoogleMap>
    );
};

export default MapView;