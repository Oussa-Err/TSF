import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  });

  const markers = [
    { lat: 13.7411, lng: 56.155663348132094 }, 
    { lat: 13.75, lng: 56.16 }, 
    { lat: 13.73, lng: 56.15 }, 
  ];

  if (!isLoaded) {
    return (
      <div className="lds-ring h-full m-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <GoogleMap zoom={13} center={markers[0]} mapContainerClassName="h-[400px] w-full my-[30px] px-[30px] border-4 border-white sm:rounded-lg">
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  );
};

export default Map;