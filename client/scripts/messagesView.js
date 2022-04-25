// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // remove old messages
    MessagesView.$chats.empty();
    // render new messages
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.;
    var listOfMessages = new Messages.interact();
    for(var eachMessage of Messages._data) {
      // append each new message to #chats
      var newHTML = MessagesView.renderMessage(eachMessage);
      $('#chats').append(newHTML);
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // console.log(MessageView.render(message));
    return MessageView.render(message);
    // // render each message into the appropriate template
    // return compiled;
    // return each message converted to html
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};