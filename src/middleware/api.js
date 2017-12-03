import { URL } from '../Constants'

const apiService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'GET_BREW_DATA':
      fetch(URL.API_BASE_PATH + URL.API_FEED).then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error in network response');
      }).then(function(data) {
        next({
          type: 'GET_BREW_DATA_RECEIVED',
          data
        })
      }).catch(function(error) {
        console.log('There was a problem with fetching brews: ' + error.message);
        next({
          type: 'GET_BREW_DATA_FAILED',
          error
        })
      });
      break;
    default:
      break;
  }
}

export default apiService;