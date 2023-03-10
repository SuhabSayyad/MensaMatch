import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

//Views
import Footer from "../ui/footer";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBDc_yl2DgtvsPKQPTe68rCCleTcSdOZIo",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map2 />;
}

export const Map2 = () => {
  const center = useMemo(() => ({ lat: 51.49, lng: 7.417 }), []);
  
  return (
    <div>
      <GoogleMap
        zoom={15.5}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker  position={center}></Marker>
      </GoogleMap>
      <Footer />
    </div>
  );

};
