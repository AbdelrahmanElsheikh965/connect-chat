const socket = io('http://localhost:3000')

socket.on('connect-chat', data => {
  console.log(data);
})

var sendButton = document.getElementById('sendBtn');
var message    = document.getElementById('messageContent');

sendButton.addEventListener('click', e => {
  e.preventDefault();
  
  // send it to the server
  socket.emit('message-channel', message.value);
  message.value = '';
})
