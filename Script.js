




//Bubles Change With Scroll


window.addEventListener("scroll", function() {
    const image = document.querySelector(".Landing .Image");
    const scrollPoint = 100; // Adjust this value as needed

    if (window.scrollY > scrollPoint) {
        image.classList.add("scrolled");
    } else {
        image.classList.remove("scrolled");
    }
});


// Download CV

document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton");

    downloadButton.addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = "Images/Danielle Carvalho_Resume.pdf"; // Adjust to the correct path and file extension
        link.target = "_blank"; // Opens in a new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
