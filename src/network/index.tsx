const clientIO = require('socket.io-client')

// Servicio externo
const serverUrl = ''

const clientSocket = clientIO.connect(serverUrl)

export default clientSocket;