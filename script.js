const socket = io('http://localhost:3000')

var sendButton = document.getElementById('sendBtn');
var message    = document.getElementById('messageContent');
var ChatContainer = document.getElementById('chat-content');

sendButton.addEventListener('click', e => {
  e.preventDefault();
  
  // send it to the server
  socket.emit('message-channel', message.value);
  appendMyMessage(message.value);
  message.value = '';

})

socket.on('connect-chat', data => {
  appendOtherSideMessage(data);
})

function appendMyMessage(messageBody) {
    const messageNode = '<div class="media media-chat media-chat-reverse">'+
                          '<div class="media-body">'+
                            `<p>${messageBody}</p>`+
                            // `<p class="meta"><time datetime="2024">${Date.now()}</time></p>`+
                          '</div>'+
                        '</div>'; 
    ChatContainer.innerHTML += messageNode;
  }

function appendOtherSideMessage(messageBody) {
  const messageNode = '<div class="media media-chat"> <img class="avatar" '+
                'src="https://img.icons8.com/color/36/000000/administrator-male.png" ' +
                `alt="..."> <div class="media-body"> <p>${messageBody}</p>` +
                '<p class="meta"><time datetime="2018">00:07</time></p> </div></div>';
  ChatContainer.innerHTML += messageNode;
}