import React, { Component } from 'react'
import _                    from 'lodash'

class Glocation extends Component {

    render(){
        var list = _.map(this.props.venues, (venue, i) => {            
            return <li key={i} onClick={() => this.props.markerClickOnList(venue)} 
                               onKeyPress={() => this.props.markerClickOnList(venue)} 
                               aria-pressed="true" role='button' tabIndex='0'> 
                               {(venue.name) +', '+ (venue.location.city)}
                   </li>            
        })

        return (
            <ol aria-label='Found List'>
              {list}
            </ol> 
        )
    }
}

export default Glocation
