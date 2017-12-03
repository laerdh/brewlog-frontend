import React from 'react'
import PropTypes from 'prop-types'
import Brew from './Brew'

const BrewList = ({ brews, onBrewClick }) => {  
  return (
    <div>
      <div className="Brew-current">
        <h2 className="title">Currently serving:</h2>
        <Brew
          {...brews.current}
        />
      </div>
      <hr className="featurette content-divider"/>
      <div className="Brew-available">
        {brews.available.map(brew => 
        <Brew 
          key={brew.batchNumber}
          {...brew} 
        />
        )}
      </div>
    </div>
  )
}

BrewList.propTypes = {
  brews: PropTypes.shape({
    current: PropTypes.object,
    available: PropTypes.array
  })
}

export default BrewList