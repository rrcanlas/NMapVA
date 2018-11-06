/* global google */
import React, { Component } from 'react'
import { withScriptjs, 
		 withGoogleMap, 
		 GoogleMap, 
		 Marker,  
		 InfoWindow}        from "react-google-maps"
	
	/*
	 * map styles from 
	 * https://snazzymaps.com/style/225961/redfred
	 */
	
	const pinkMapStyles = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#b0b0b0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffe9e9"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ceffc9"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ecb9b9"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ecb9b9"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#c29b9b"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ecb9b9"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#d2bdbd"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d7dbf9"
            }
        ]
    }
]


	const MyMapComponent = withScriptjs(withGoogleMap((props) =>
	  <GoogleMap
	  	defaultOptions={{
            styles: pinkMapStyles,
        }}
	    defaultZoom={12}	    
	    center={{ lat: 37.646152, lng: -77.511429 }}
	    defaultCenter={{ lat: 37.646152, lng: -77.511429 }}
	  >
	    {props.markers && 
	    	props.markers.filter(marker => marker.isVisible)
	    	.map((marker, i, array) => {
	    		const venueDetail = props.venues.find(venue => venue.id === marker.id)
	    		return (
	    		<Marker 
	    		  key={i} 
	    		  position={{ lat: marker.lat, lng: marker.lng }} 
	    		  onClick={() => props.markerOnClick(marker)}
	    		  animation={array.length === 1 
	    		  	? google.maps.Animation.BOUNCE 
	    		  	: google.maps.Animation.DROP}

	    		  	/*
	 				 * marker(s) icon
	 				 * from GOOGLE
	 				 */
	    		  	
	    		  icon= {'http://maps.google.com/mapfiles/ms/micons/pink-pushpin.png'}	>	    			
	    			{marker.isOpen && 
	    			   (
	    		  		<InfoWindow>
	    		  		  <React.Fragment>
	    		  		  	<p><b>
	    		  			  {venueDetail.name}
	    		  			  </b>
	    		  			</p>
	    		  			<p>
	    		  			  {venueDetail.location.address}
	    		  			</p>
	    		  			<p>
	    		  			  {venueDetail.location.city}{', '}
	    		  			  {venueDetail.location.state}{' '}
	    		  			  {venueDetail.location.postalCode}
	    		  			</p>
	    			      </React.Fragment>
	    		  		</InfoWindow>
	    			)}
	    		</Marker>
				)
	    	})}
	  </GoogleMap>
	))

	export default class Gmap extends Component {
		render() {
			return (
				<MyMapComponent
				  {...this.props}
				  isMarkerShown

				  /*
 				   * maps API from 
 				   * GOOGLEAPIS
 				   */
				   
				  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=[Insert Client Secret Key Here!]"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `100%`, width: `100%` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				/>
			)
		}
	}