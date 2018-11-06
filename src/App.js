import React, { Component } from 'react'
import                           './App.css'
import Gmap                 from './Gmap'
import Glocation            from './Glocation'
import superagentRequest              from 'superagent'

/*
 * fetch data from  
 * FOURSQUARE API
 */

const url = 'https://api.foursquare.com/v2/venues/search?r=json&v=20140806&ll=37.646152,-77.511429&client_id= [Insert Client ID Key Here!]&client_secret= [Insert Client Secret Key Here!]'

class App extends Component {

    constructor() {
      super()
      this.state = {
        markers: []
      }
    }
    
    /*
     * close markers
     */

    markerOut = () => {
      const markers = this.state.markers.map(marker => {
        marker.isOpen = false
        return marker
      })
      this.setState({markers: Object.assign(this.state.markers, markers)})
    }

    markerOnClick = marker => {
      this.markerOut()
     
      marker.isOpen = true

      /*
       * showing of markers
       */
     
      this.setState({markers: Object.assign(this.state.markers, marker)})
      const venue = this.state.venues.find(venue => venue.id === marker.id)     

      /*
       * superagent ajax API
       */
      
      superagentRequest
      .get(url)
      .query({ query: venue })
      .then(response => {
        
        const newVenue = Object.assign(venue, response.body.response.venue)
        this.setState({venues: Object.assign(this.state.venues, newVenue)})
      })

      //console.log(this.state.venues)

    }

    /*
     * display info 
     * on clicked 
     * list of button      
     */

    markerClickOnList= venue =>  {

      //console.log('Venue:' + venue)

      if (this.state.markers === null) { 
        alert('Click Toggle Marker(s) to continue')
        return
      } else {
        var marker = this.state.markers.find(marker => marker.id === venue.id)         
        this.markerOnClick(marker)
      }

      //console.log(this.state.venues)

      console.log(marker.id)
      console.log(venue.id)     
    }
    
    /*
     * location filter
     */

    search(gQuery = 'Donut') {

        /*
         * superagent ajax API
         */

        superagentRequest
        .get(url)
        .query({ query: gQuery })
        .query({ limit: 10})
        .then(response => {    
            const venues = response.body.response.venues
            const markers = venues.map(venue => {
              return {
                lat: venue.location.lat,
                lng: venue.location.lng,
                isOpen: false,
                isVisible: true,
                id: venue.id,
                mark: venue.location.categories
              }
            })

            console.log(JSON.stringify(markers))
            //console.log(JSON.stringify(venues)) 

            this.setState({
                venues, markers
            })
        })
        .catch(err => {
          //err.message, err.response
          alert('No internet Try: Checking the network cables, modem, and router or reconnecting to Wi-Fi')                                     
          console.log('error')
        })  
    }

    updateSearch(){
      this.search(this.refs.gQuery.value)
    }

    /*
     * displays or hides the marker(s)
     */

    toggleListings(){
      if (this.state.markers === null) { 
        this.updateSearch()
        console.log('no marker')
      } else {
        this.setState({markers: null})
        console.log('with marker')
      }
    }

    componentWillMount(){
      this.search()       
    }
 
    render() {

        return (
          <div className = 'conTainer'>
            <div className = 'listBox'>     
              <div className= 'finDer'>
                <h2>Location Finder in Virginia, USA </h2>
                   <div className= 'finDer' 
                      tabIndex='0'  
                      aria-pressed='true' 
                      role='button'>
                    <input  
                      id='togGle'                     
                      type='button' 
                      value='Toggle Marker(s)'
                      ref='gQuery'
                      onClick={ (e) => {this.toggleListings() }}
                      onKeyPress={ (e) => {this.toggleListings() }}                       
                      />
                   </div> 
                 <div className='searchContainer'> 
                   <h3>Search by Name</h3>
                    <input                     
                      ref='gQuery' 
                      onChange={ (e) => {this.updateSearch() }} 
                      type='search' 
                      defaultValue='Donut'
                      tabIndex='0'
                      role='searchbox'
                      label='search by name'/>
                      {console.log('donut')}
                 </div>  
              </div>
              <div className='Glocation' tabIndex='0'>
                <Glocation
                  venues={this.state.venues}
                  markerClickOnList={this.markerClickOnList}                  
                /> 
              </div>
            </div>
                
              <div id='map' aria-label='map' role='main'>                
                <Gmap 
                  {...this.state}
                  markerOnClick={this.markerOnClick}
                />              
              </div>
          </div>                  
        )
    }
}

export default App;
