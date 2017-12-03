import React from 'react'
import PropTypes from 'prop-types'

const Brew = (brew) => {
  function formatNumber(number) {
    var n = parseFloat(number)
    return n.toFixed(2)
  }

  function getBrewTypeClass(type) {
    let classType = 'Brew-item-label Brew-item-type'
    switch (type) {
      case 'IPA':
        return classType.concat('IPA')
      case 'Porter':
        return classType.concat('Porter')
      case 'Black IPA':
        return classType.concat('BlackIPA')
      default:
        return classType.concat('Default')
    }
  }

  return (
    <div className="Brew-item">
      <img src="img/placeholder.png" width="100%" height="200px" alt="Beer" />
      <div className={ getBrewTypeClass(brew.type) }></div>
      <h2>{ brew.name }</h2>
      <hr className="featurette"/>
      <p>Date: <b>{ brew.date }</b></p>
      <p>Type: <b>{ brew.type }</b></p>
      <p>Size: <b>{ brew.size }L</b></p>
      <p>Volume remaining: <b>{ formatNumber(brew.volumeRemaining) }L</b></p>
      <p>Alcohol: <b>{ brew.alcohol }%</b></p>
      <p>Brewer: <b>{ brew.brewer }</b></p>
      <p>Comment: { brew.comment }</p>
    </div>
  )
}

Brew.propTypes = {
  brew: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.number,
    volumeRemaining: PropTypes.number,
    alcohol: PropTypes.number,
    date: PropTypes.number,
    brewer: PropTypes.string,
    comment: PropTypes.string
  })
}

export default Brew