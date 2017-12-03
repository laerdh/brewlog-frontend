import { connect } from 'react-redux'
import BrewList from '../components/BrewList'

const mapStateToProps = (state) => {
  return Object.assign({}, { brews: state.brews })
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    console.log("ON CLICK: Not Implemented");
  }
})

const Brewlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrewList)

export default Brewlog