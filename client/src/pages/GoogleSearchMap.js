import React, { Component } from 'react';

import {PAGEROUTES} from '../App';
import FloatNavButton from '../components/buttons/floatNavButton';
import MapWithASearchBox from '../components/maps/MapWithASearchBox';



class GoogleSearchMap extends Component {

    

    render() {
        return (
            <div className="google-search-map">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1>Google Search Map</h1>

                 
                    <div>
                      <MapWithASearchBox />
                        
                    </div>
                   

                </div>
                <FloatNavButton linkLeft={PAGEROUTES[1]}  />
                
            </div>
           

        );
    }
}
export default GoogleSearchMap;