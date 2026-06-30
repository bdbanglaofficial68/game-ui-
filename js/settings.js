// ==========================================
// WinBD Settings
// settings.js - Part 1
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("settingsForm");

    const darkMode =
        document.getElementById("darkMode");

    const language =
        document.getElementById("language");

    const pushNotification =
        document.getElementById("pushNotification");

    const emailNotification =
        document.getElementById("emailNotification");

    const smsNotification =
        document.getElementById("smsNotification");

    const privateProfile =
        document.getElementById("privateProfile");

    const autoLogout =
        document.getElementById("autoLogout");

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
    // Load Saved Settings
    // ==========================

    function loadSettings() {

        const settings =
            JSON.parse(
                localStorage.getItem("winbdSettings")
            ) || {};

        darkMode.checked =
            settings.darkMode ?? true;

        language.value =
            settings.language || "en";

        pushNotification.checked =
            settings.pushNotification ?? true;

        emailNotification.checked =
            settings.emailNotification ?? false;

        smsNotification.checked =
            settings.smsNotification ?? true;

        privateProfile.checked =
            settings.privateProfile ?? false;

        autoLogout.checked =
            settings.autoLogout ?? true;

        document.body.classList.toggle(
            "light-mode",
            !darkMode.checked
        );

    }

    loadSettings();

    // ==========================
    // Theme Switch
    // ==========================

    darkMode.addEventListener("change", () => {

        document.body.classList.toggle(
            "light-mode",
            !darkMode.checked
        );

    });

    // ==========================
    // Language Change
    // ==========================

    language.addEventListener("change", () => {

        showToast(
            "Language changed to " +
            language.options[
                language.selectedIndex
            ].text
        );

    });
