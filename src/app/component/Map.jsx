import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  });

  const markers = [
    { lat: 33.59545184820839, lng: -7.613939868192454 }, 
    { lat: 33.82837058849689, lng: -4.831578346494165 }, 
    { lat: 48.83411031609412, lng: 2.365055324449277 }, 
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
    <GoogleMap zoom={3} center={markers[0]} mapContainerClassName="h-[400px] w-full my-[30px] px-[30px] border-4 border-white sm:rounded-lg">
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  );
};

export default Map;