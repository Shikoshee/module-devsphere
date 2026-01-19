// Smooth scroll function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    if (!form) {
        console.error("contactForm not found in DOM");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const params = {
            title: "Website Contact",
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
            "service_fwu6p2g",
            "template_y3c2rcf",
            params
        ).then(
            function () {
                status.style.color = "green";
                status.innerText = "Message sent successfully!";
                form.reset();
            },
            function (error) {
                status.style.color = "red";
                status.innerText = "Failed to send message. Try again.";
                console.error("EmailJS error:", error);
            }
        );
    });
});
