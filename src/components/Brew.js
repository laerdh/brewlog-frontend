import React from 'react'
import PropTypes from 'prop-types'

const Brew = (brew) => {
  function formatNumber(number) {
    var n = parseFloat(number)
    return n.toFixed(2)
  }

  return (
    <ul className="Brew-item">
      <li>Name: { brew.name }</li>
      <li>Type: { brew.type }</li>
      <li>Size: { brew.size }</li>
      <li>Volume remaining: { formatNumber(brew.volumeRemaining) }</li>
      <li>Alcohol: { brew.alcohol }</li>
      <li>Date: { brew.date }</li>
      <li>Brewer: { brew.brewer }</li>
      <li>Comment: { brew.comment }</li>
    </ul>
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