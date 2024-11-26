
//Bubbles Change With Scroll


document.addEventListener("scroll", () => {
    const profileImage = document.querySelector(".imageProfile");
    const triggerHeight = 100; // Adjust this value as needed

    if (window.scrollY > triggerHeight) {
        profileImage.classList.add("scrolled");
    } else {
        profileImage.classList.remove("scrolled");
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


document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".arrow-left");
    const nextButton = document.querySelector(".arrow-right");

    let currentIndex = 0;

    function updateSliderPosition() {
        const slideWidth = slides[0].clientWidth;
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });

    // Adjust the slider position on window resize to maintain alignment
    window.addEventListener("resize", updateSliderPosition);
});




//Words limit from carousel

document.addEventListener("DOMContentLoaded", () => {
    // Select all the paragraphs you want to truncate
    const paragraphs = document.querySelectorAll(".card p");
    
    paragraphs.forEach(paragraph => {
        const maxWords = 20; // Set the maximum number of words
        const words = paragraph.textContent.split(" ");

        if (words.length > maxWords) {
            // Truncate the words and add ellipsis
            const truncatedText = words.slice(0, maxWords).join(" ") + "...";
            paragraph.textContent = truncatedText;
        }
    });
});
