import SockJS from 'sockjs-client'
import Stomp from 'stomp-websocket-js'
import { URL } from '../Constants'

const wsService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'SUBSCRIBE_TO_CURRENT_BREW':
      var socket = SockJS(URL.WS_ENDPOINT)
      var stompClient = Stomp.over(socket)

      stompClient.connect({}, function(frame) {
        stompClient.subscribe(URL.WS_SUBSCRIPTION, function(data) {
          var brewData = JSON.parse(data.body)
          next({ 
            type: 'NEW_BREW_DATA_PUSHED',
            data: brewData
          })
        })
      })

      next({ type: 'SUBSCRIBED_TO_CURRENT_BREW' })
      break;
    default:
      break;
  }
}

export default wsService