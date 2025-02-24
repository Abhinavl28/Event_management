function uploadImage() {
    const fileInput = document.getElementById("imageInput");
    if (fileInput.files.length === 0) {
        alert("Please select an image to upload.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const imageUrl = event.target.result;
        saveEvent(imageUrl);
    };
    reader.readAsDataURL(fileInput.files[0]);
}

function saveEvent(imageUrl) {
    const eventName = document.getElementById("eventName").value.trim();
    const eventType = document.getElementById("eventType").value.trim();
    const price = document.getElementById("price").value.trim();

    if (!eventName || !eventType || !price) {
        alert("Please fill in all fields!");
        return;
    }

    const event = { eventName, eventType, price, imageUrl };
    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));

    alert("Event added successfully!");
    window.location.href = "main.html";
}

function loadEvents() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const eventContainer = document.getElementById("event-list");
    eventContainer.innerHTML = "";
    
    events.forEach(event => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("movie-list-item");
        eventItem.innerHTML = `
            <img class="movie-list-item-img" src="${event.imageUrl}" alt="Event Image">
            <span class="movie-list-item-title">${event.eventName}</span>
            <p class="movie-list-item-desc">Type: ${event.eventType} | Price: $${event.price}</p>
            <button class="movie-list-item-button">Join Event</button>
        `;
        eventContainer.appendChild(eventItem);
    });
}

document.addEventListener("DOMContentLoaded", loadEvents);
