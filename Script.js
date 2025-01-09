
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
        link.href = "https://drive.google.com/file/d/1mNi_n3axPYoQ6ZH-fIgRDDcVV5nn4UcN/view?usp=sharing"; // Adjust to the correct path and file extension
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


// Form 

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture input values
    const name = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Define recipient email and subject
    const recipientEmail = "daniellefraga23@gmail.com";
    const subject = `Message from ${name}`;

    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${userEmail}\n\nMessage:\n${message}`
    )}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  }



