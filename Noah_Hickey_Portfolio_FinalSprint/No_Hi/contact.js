
//Form confirmation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual submission for testing
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.reset(); // Clears the form fields
});


//Validation//
document.getElementById("submit-btn").addEventListener("click", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all the fields before submitting!");
        event.preventDefault(); // Prevent form submission
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address!");
        event.preventDefault();
    }
});

const socialIcons = document.querySelectorAll(".socicon");

// Create a tooltip element once (outside the loop)
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

// Add event listeners for each icon
socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", (event) => {
        tooltip.textContent = icon.alt; // Uses the alt attribute as tooltip text
        tooltip.style.display = "block";
        tooltip.style.position = "absolute";
        tooltip.style.background = "black";
        tooltip.style.color = "white";
        tooltip.style.padding = "5px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "14px";
        tooltip.style.pointerEvents = "none"; // Prevent interaction issues
    });

    icon.addEventListener("mousemove", (event) => {
        // Offset the tooltip slightly from the mouse pointer
        tooltip.style.top = `${event.pageY + 15}px`;
        tooltip.style.left = `${event.pageX + 15}px`;
    });

    icon.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});
