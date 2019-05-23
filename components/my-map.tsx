import * as React from 'react';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet-universal'
import { markerData } from '../data/map';
import { useLayoutEffect } from 'react';

export interface IMyMarkerProps {
    position: number[],
    event: string,
    year: string
}

function MyMarker(props: IMyMarkerProps) {
    const { position, event, year } = props;

    return (
        <Marker position={position}>
            <Tooltip permanent>
                {event} <br /> {year}
            </Tooltip>
        </Marker>
    )
}

function getMarkers(markers: IMyMarkerProps[]) {
    return markers.map((marker, index) =>
        <MyMarker key={index} {...marker} />
    )
}

export interface IMyMapProps {
}

function ssrWraper(markers){
    const L = require('leaflet')

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconUrl: 'static/images/marker-icon.png',
        shadowUrl: 'static/images/marker-shadow.png'
    });
    return (
        <>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers}
        </>
    )
}

export default function MyMap(props: IMyMapProps) {
    const [state, setState] = React.useState(
        {
            lat: 38.75,
            lng: -9.29,
            zoom: 4,
        }
    )
    const position = [state.lat, state.lng]
    const [markers, setMarkers] = React.useState(<></>)

    React.useEffect(()=>{
        setMarkers(ssrWraper(getMarkers(markerData)))
    })

    return (
        <div id="container" className="leaftlet-container" >
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.0/dist/leaflet.css" />
            <Map style={{ height: "600px" }} center={position} zoom={state.zoom}>
                {markers}
            </Map>
        </div>
    );
}
