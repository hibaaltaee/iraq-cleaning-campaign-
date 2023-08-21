import React, { ReactNode, Suspense } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

type Props = {
    children: ReactNode,
    handleMapClick: (event: google.maps.MapMouseEvent) => void,
    zoom: number,
}

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 33.296947,
    lng: 44.399979,
};

export default function MyGoogleMaps({children, handleMapClick, zoom}: Props) {
  return (
        <LoadScript loadingElement={<div className="rounded-md overflow-hidden h-full w-full bg-cover bg-[url('/assets/map.jpg')] blur-md bg-no-repeat"></div>} googleMapsApiKey="AIzaSyAYkuCOCv87lC81T5S0YftZkEgchLiSmsw">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} onClick={handleMapClick}>
                    {children}
                </GoogleMap>
        </LoadScript>
  )
}