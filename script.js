var socket = io();
$('#messages').append($('<li>').text('Hi'));
$('form').submit(function () {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg));
});
socket.on('disconnect', function () {
    $('#messages').append($('<li>').text('Bye'));
});