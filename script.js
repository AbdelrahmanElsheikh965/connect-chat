const socket = io('http://localhost:3000')

socket.on('connect-chat', data => {
  console.log(data);
})