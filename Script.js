




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
        link.href = "https://cdn.discordapp.com/attachments/799976470893953034/1301726109846732843/DanielleCarvalho_Resume.pdf?ex=67258669&is=672434e9&hm=1597639a1e8c49fc3e2344e0b3abb8f0c1474852fc3ae06fd32de2cba8ae9d57&"; // Adjust to the correct path and file extension
        link.target = "_blank"; // Opens in a new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
