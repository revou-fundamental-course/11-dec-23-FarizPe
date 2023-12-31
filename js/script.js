document.addEventListener("DOMContentLoaded", function() {
    var username = prompt("Please enter your name:");
    document.getElementById("username").innerText = username;
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("messageForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var messageInput = document.getElementById("message");
        var messageValue = messageInput.value;

        alert("Message submitted: " + messageValue);
    });
});

let slideIndex = 0;

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}


showSlides();

// function submitForm() {
//     var form = document.getElementById("messageForm");
//     var tableBody = document.getElementById("dataTableBody");

//     var nama = document.getElementById("Nama").value;
//     var tanggalLahir = document.getElementById("tanggal_lahir").value;
//     var jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
//     var pesan = document.getElementById("pesan").value;

//     if (nama.trim() === "" || tanggalLahir.trim() === "" || !jenisKelamin || pesan.trim() === "") {
//         alert("Harap isi semua field!");
//         return;
//     }

//     var newRow = tableBody.insertRow();
//     newRow.innerHTML = `
//         <td>${nama}</td>
//         <td>${tanggalLahir}</td>
//         <td>${jenisKelamin.value}</td>
//         <td>${pesan}</td>
//         <td class="icon-cell">
//             <img src="assets/icon-trash.png" alt="Trash Icon" onclick="deleteRow(this)">
//         </td>
//     `;

//     form.reset();
// }

function submitForm() {
    var form = document.getElementById("messageForm");
    var resultsContainer = document.querySelector(".result-list");

    var nama = document.getElementById("Nama").value;
    var tanggalLahir = document.getElementById("tanggal_lahir").value;
    var jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
    var pesan = document.getElementById("pesan").value;

    if (nama.trim() === "" || tanggalLahir.trim() === "" || !jenisKelamin || pesan.trim() === "") {
        alert("Harap isi semua field!");
        return;
    }

    // Menampilkan hasil form di dalam resultsContainer
    var resultItem = document.createElement("li");
    resultItem.classList.add("result-item");
    resultItem.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin.value}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
        <p class="icon-cell">
            <img src="assets/icon-trash.png" alt="Trash Icon" onclick="deleteResult(this)">
        </p>
    `;

    resultsContainer.appendChild(resultItem);

    form.reset();
}

// Fungsi untuk menghapus hasil form
function deleteResult(element) {
    var resultItem = element.closest(".result-item");
    resultItem.remove();
}


// Fungsi untuk menghapus hasil form
function deleteResult(element) {
    var resultItem = element.closest(".result-item");
    resultItem.remove();
}


function deleteRow(icon) {
    var row = icon.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function openProfile() {
    alert("Opening profile...");
}

