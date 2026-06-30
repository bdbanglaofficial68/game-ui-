// login.js

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const loginBtn = document.getElementById("loginBtn");
    const togglePassword = document.getElementById("togglePassword");

    const loader = document.getElementById("loader");
    const toast = document.getElementById("toast");

    function showToast(message, success = true) {
        toast.innerText = message;

        toast.className = "toast show";

        if (success) {
            toast.style.background = "#22c55e";
        } else {
            toast.style.background = "#ef4444";
        }

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    function showLoader() {
        loader.classList.remove("hidden");
    }

    function hideLoader() {
        loader.classList.add("hidden");
    }

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {
            password.type = "text";
            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            password.type = "password";
            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';
        }

    });

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const user = username.value.trim();
        const pass = password.value.trim();

        if (user === "") {
            showToast("Username is required", false);
            username.focus();
            return;
        }

        if (pass === "") {
            showToast("Password is required", false);
            password.focus();
            return;
        }

        if (pass.length < 6) {
            showToast("Password must be at least 6 characters", false);
            return;
        }

        loginBtn.disabled = true;

        showLoader();

        try {

            await new Promise(resolve => setTimeout(resolve, 1500));

            if (user === "admin" && pass === "123456") {

                localStorage.setItem("token", "winbd_demo_token");

                localStorage.setItem("username", user);

                showToast("Login Successful");

                setTimeout(() => {

                    window.location.href = "home.html";

                }, 1200);

            } else {

                showToast("Invalid Username or Password", false);

            }

        } catch (error) {

            showToast("Server Error", false);

            console.error(error);

        } finally {

            hideLoader();

            loginBtn.disabled = false;

        }

    });

});
