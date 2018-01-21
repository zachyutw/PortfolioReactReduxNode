import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps,lifecycle } from "recompose";
import GoogelMapStyleJson from './googelMapStyleJson';

const google_map_api_key = "AIzaSyC2cDwwinLd867HkOywgBxw4bcy8tuPVqI";
const add_api_key = `key=${google_map_api_key}&`;
const googleMapStyle = {height:'300px',width:'100%'}
const MyMapComponent = compose(
    withProps({
        
        googleMapURL: `https://maps.googleapis.com/maps/api/js?${add_api_key}v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={googleMapStyle} />
    }), lifecycle({
        componentWillMount() {
           
      
            this.setState({
              bounds: null,
              center: {
                lat: 41.9, lng: -87.624
              },
              location: { lat: 49.1562784, lng: -122.7810177 },
              zoom:15
            })}
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