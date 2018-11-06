
# **Neighborhood Map (React)**

This application was designed and built using the framework of [:electron: React](https://github.com/facebook/create-react-app), [Superagent](https://www.npmjs.com/package/superagent) ajax library, [Foursquare](https://foursquare.com) for the API and the [Snazzy Maps](https://snazzymaps.com) *Designed by Matiss from Datateks* for a pre-built map styles. 

## Goal

 * To design patterns and UI libraries like [:electron: React](https://github.com/facebook/create-react-app) that can assist in developing a manageable codebase. It can decrease the time required in developing an application that can also provide utilities. 

 * Implement third-party APIs that provide valuable data sets to improve the quality of the application.

 * To provide accessibility and responsiveness. 

## How To Begin 
      
  1. Clone the starter code from this [repository](https://github.com/rrcanlas/NMapVA).

  2. Create an account in the [Google Maps API](https://cloud.google.com/maps-platform/) to get a key. Where the value of the key parameter located at the `NMReact/src/Gmap.js` will be inserted in Line 197:

     `googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=[Insert Key Here!]"`

  3. Create an account in the [Foursquare](https://foursquare.com) to obtain a key where the value of the key parameter located at the `NMReact/src/App.js` will be inserted in Line 12:

     url = `'https://api.foursquare.com/v2/venues/search?r=json&v=20140806&ll=37.646152,-77.511429&client_id=` `[Insert Client ID Key Here!]`&client_secret=`[Insert Client Secret Key Here!]`

  4. On the terminal of your computer:

     * switch directory to NMReact folder 
	 * run `npm install` and `npm install superagent` to instate dependencies
	 * run `npm start` to view the app in your browser
  
  
## Development Strategy

 1.  Used [:electron: Create React App](https://github.com/facebook/create-react-app) to set up the project.

 2.  Obtained a [Google Maps API](https://cloud.google.com/maps-platform/) key where the value of the key parameter is to be included in `NMReact/src/Gmap.js` when loading the Google Maps API.

 3.  Obtained the [Foursquare](https://foursquare.com) API key where the value of the key parameter were  included to `NMReact/src/App.js` in loading of the data.

 4.  Obtained [superagent](https://www.npmjs.com/package/superagent) for it's ajax library. 

 5.  Written a code required to display map markers:triangular_flag_on_post: identifying at least :keycap_ten: locations within the neighborhood's vicinity that will display the locations by default when the page is loaded. In the code I:

 	 * implemented list of locations on the set of locations that was found.

 	 * provided an input field to filter the list of location and a toggle button to display and hide the markers on the map.

 	 * displayed the map markers by default on load. The list of locations and markers updates accordingly in real time.

 	 * added functionality using third-party APIs to provide information when a map marker or list view entry is clicked.

     * made sure that the input text area to filter locations is easy to locate and simple to understand. Selecting a unique name `(e.g. Dazzle, Spanish, Pampas etc)` via list of location or map marker causes the map marker to bounce. This indicates that the location has been selected, and the associated info window opens above the map marker with additional information.

     * changed [marker's icon](http://maps.google.com/mapfiles/ms/micons/pink-pushpin.png) and [map styles](https://snazzymaps.com/style/225961/redfred).

 6.  Implemented accessibility :wheelchair: features with the use of attributes like tabIndex :bookmark_tabs: to indicate if (or where) an element sits in keyboard navigation order just by pressing the Tab key. It was labeled with added role for each element.

 7.  Used media queries that provide fluid breakpoints across different screen sizes :white_medium_square: :white_medium_small_square: :white_small_square: 

 8.  Added a *ServiceWorker* script to cache :outbox_tray: requests to all of the site’s assets (so that any page that has been visited by a user will be accessible when the user is offline :mobile_phone_off:).

 9.  Wrote README.md :registered:

 10. Pushed :punch: the project to my GitHub account.

     /play story :sweat:
 

## Special Thanks 

 :raised_hands: To our FEND scholar and Student Leader, Forrest Walker on his [FEND Project 7: Neighborhood Map (React) with Forrest](https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP) tutorial
 who helped and walked with me all through out the crucial :cry: stage of linking the API data to display information on the infoWindow. And to the words of encouragement, stories, advice and tips from FEND graduates :raised_hands:. 

