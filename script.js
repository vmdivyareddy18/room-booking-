function bookRoom(roomName) {
    alert("You booked: " + roomName);
}

function scrollToRooms() {
    document.getElementById("rooms").scrollIntoView({
        behavior: "smooth"
    });
}
