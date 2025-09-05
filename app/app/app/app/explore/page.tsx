"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const Map = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Explore() {
  const [center] = useState({ lat: 49.2827, lng: -123.1207 }); // Vancouver
  return (
    <main>
      <h1 style={{fontSize:22,fontWeight:700,marginBottom:8}}>Area Explorer</h1>
      <p style={{opacity:.8,marginBottom:12}}>Pan/zoom the map. Pins/amenities can be added later.</p>
      <div style={{height:420,borderRadius:16,overflow:"hidden",border:"1px solid #eee"}}>
        <Map center={center} />
      </div>
    </main>
  );
}
