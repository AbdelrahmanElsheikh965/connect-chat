const socketIO = require("socket.io");
const io = require("socket.io")(3000, {
      cors: {
        origin: "*",
      },
});


io.on("connection", (socket) => {
  socket.emit("connect-chat", "test_message");
  
  // handle the incoming message
  socket.on('message-channel', message => {
    // log the message just for testing purposes.
    console.log(message);
  })
});


