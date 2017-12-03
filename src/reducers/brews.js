const brews = (state = [], action) => {
    switch (action.type) {
        case 'GET_BREW_DATA_RECEIVED':
            console.log('GET_BREW_DATA_RECEIVED')
            return action.data
        case 'GET_BREW_DATA_FAILED':
            console.log('GET_BREW_DATA_FAILED: ' + action.error)
            return state
        case 'SUBSCRIBED_TO_CURRENT_BREW':
            console.log('SUBSCRIBED TO CURRENT BREW')
            return state
        case 'NEW_BREW_DATA_PUSHED':
            console.log('NEW BREW DATA PUSHED!')
            return {
                ...state,
                current: action.data
            }
        default:
            return state
    }
}

export default brews