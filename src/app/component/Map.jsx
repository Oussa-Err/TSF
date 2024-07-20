import React, { useRef } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);
  const position = [
    [33.59545184820839, -7.613939868192454],
    [33.82837058849689, -4.831578346494165],
    [48.83411031609412, 2.365055324449277],
  ];

  if (!true) {
    return (
      <div className="flex justify-center">
        <div className="bg-slate-700 h-[7rem] w-72 rounded-lg flex flex-col items-center justify-center">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <MapContainer
      zoom={3}
      className="h-[400px] w-full my-[30px] px-[30px] border-4 border-white sm:rounded-lg"
      center={position[0]} 
      ref={mapRef}
    >
      {position.map((item, index) => (
        <Marker key={index} position={item} >
          <Popup>TSF</Popup>
        </Marker>
      ))}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
