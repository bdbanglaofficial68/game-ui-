// forgot-password.js

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const account = document.querySelector("input[type='text']");
    const problem = document.querySelector("select");
    const details = document.querySelector("textarea");
    const file = document.querySelector("input[type='file']");

    const submitBtn = document.querySelector(".submit");
    const supportBtn = document.querySelector(".support");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const user = account.value.trim();
        const type = problem.value;
        const message = details.value.trim();

        if (!user) {
            alert("Please enter your Username, Email or Phone.");
            account.focus();
            return;
        }

        if (!type) {
            alert("Please select a problem type.");
            problem.focus();
            return;
        }

        if (message.length < 15) {
            alert("Please describe your problem in more detail.");
            details.focus();
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

        // Demo request (replace with your API)
        setTimeout(() => {

            const ticket = "WINBD-" + Date.now();

            localStorage.setItem("supportTicket", ticket);

            alert(
                "Support request submitted successfully!\n\nTicket ID: " + ticket
            );

            form.reset();

            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Request";

        }, 2000);

    });

    supportBtn.addEventListener("click", () => {

        alert(
            "Live Support is currently unavailable.\nPlease submit your request or connect your live chat system."
        );

        // Example:
        // window.location.href = "support.html";
    });

    if (file) {

        file.addEventListener("change", () => {

            if (file.files.length > 0) {

                const maxSize = 5 * 1024 * 1024; // 5 MB

                if (file.files[0].size > maxSize) {

                    alert("File size must be less than 5MB.");

                    file.value = "";

                }

            }

        });

    }

});
