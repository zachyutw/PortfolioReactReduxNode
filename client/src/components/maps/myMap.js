import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from "recompose";
import GoogelMapStyleJson from './googelMapStyleJson';

const MyMapComponent = compose(
    withProps({
        
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place",
        loadingElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.location}
        defaultOptions={{styles:GoogelMapStyleJson}}
    >
        {props.isMarkerShown && <Marker position={props.location} onClick={props.onMarkerClick} />}
    </GoogleMap>
    )

export default MyMapComponent;