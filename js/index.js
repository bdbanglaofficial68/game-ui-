// ==========================================
// WinBD Home
// index.js - Part 1
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const splash =
        document.getElementById("splashScreen");

    const loader =
        document.getElementById("loader");

    const toast =
        document.getElementById("toast");

    // ==========================
    // Toast
    // ==========================

    function showToast(message, success = true) {

        if (!toast) return;

        toast.textContent = message;

        toast.className = "toast show";

        toast.style.background =
            success ? "#22c55e" : "#ef4444";

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

    // ==========================
    // Loader
    // ==========================

    function showLoader() {

        if (loader) {

            loader.classList.remove("hidden");

        }

    }

    function hideLoader() {

        if (loader) {

            loader.classList.add("hidden");

        }

    }

    // ==========================
    // Splash Screen
    // ==========================

    if (splash) {

        setTimeout(() => {

            splash.classList.add("hide");

        }, 2000);

    }

    // ==========================
    // Auto Login Redirect
    // ==========================

    const currentUser =
        localStorage.getItem("username");

    if (currentUser) {

        setTimeout(() => {

            window.location.href =
                "dashboard.html";

        }, 2200);

    }

    // ==========================
    // Welcome Toast
    // ==========================

    setTimeout(() => {

        showToast("Welcome to WinBD");

    }, 2500);

});
