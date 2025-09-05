"use client";
import MapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map({ center }: { center: { lat: number; lng: number } }) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
  return (
    <MapGL
      mapboxAccessToken={token}
      initialViewState={{ latitude: center.lat, longitude: center.lng, zoom: 11 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ width: "100%", height: "100%" }}
    >
      <div style={{ position: "absolute", right: 10, top: 10 }}>
        <NavigationControl />
      </div>
    </MapGL>
  );
}
