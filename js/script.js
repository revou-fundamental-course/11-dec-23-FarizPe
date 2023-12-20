// Welcome message with user's name
document.addEventListener("DOMContentLoaded", function() {
    var username = prompt("Please enter your name:");
    document.getElementById("username").innerText = username;
});

// Form validation and submission
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("messageForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var messageInput = document.getElementById("message");
        var messageValue = messageInput.value;

        // Your validation logic here

        alert("Message submitted: " + messageValue);
    });
});

let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}

//testing git branch

showSlides();

function submitForm() {
    var form = document.getElementById("messageForm");
    var tableBody = document.getElementById("dataTableBody");

    // Get form values
    var nama = document.getElementById("Nama").value;
    var tanggalLahir = document.getElementById("tanggal_lahir").value;
    var jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var pesan = document.getElementById("pesan").value;

    // Add data to the table
    var newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${tanggalLahir}</td>
        <td>${jenisKelamin}</td>
        <td>${pesan}</td>
        <td class="icon-cell">
            <img src="assets/icon-trash.png" alt="Trash Icon" onclick="deleteRow(this)">
        </td>
    `;

    // Clear the form
    form.reset();
}

function deleteRow(icon) {
    var row = icon.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function openProfile() {
    // Implement logic to open profile page
    alert("Opening profile...");
}
