// ==========================================
// WinBD Profile
// profile.js - Part 1
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // DOM Elements
    // ==========================

    const profileForm = document.getElementById("profileForm");

    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const country = document.getElementById("country");
    const referral = document.getElementById("referral");

    const profileImage = document.getElementById("profileImage");
    const avatarUpload = document.getElementById("avatarUpload");

    const walletBalance =
        document.getElementById("walletBalance");

    const loader =
        document.getElementById("loader");

    const toast =
        document.getElementById("toast");

    // ==========================
    // Toast
    // ==========================

    function showToast(message, success = true) {

        toast.innerText = message;

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

        loader.classList.remove("hidden");

    }

    function hideLoader() {

        loader.classList.add("hidden");

    }

    // ==========================
    // Load Profile
    // ==========================

    function loadProfile() {

        const profile = JSON.parse(
            localStorage.getItem("winbdProfile")
        );

        if (!profile) return;

        fullname.value = profile.fullname || "";

        username.value = profile.username || "";

        email.value = profile.email || "";

        phone.value = profile.phone || "";

        country.value = profile.country || "Bangladesh";

        referral.value = profile.referral || "WINBD2026";

        walletBalance.textContent =
            "৳ " + (profile.balance || 0);

        if (profile.avatar) {

            profileImage.src = profile.avatar;

        }

    }

    loadProfile();

    // ==========================
    // Avatar Preview
    // ==========================

    avatarUpload.addEventListener("change", () => {

        const file = avatarUpload.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {

            showToast("Please select an image.", false);

            return;

        }

        if (file.size > 5 * 1024 * 1024) {

            showToast("Maximum file size is 5MB.", false);

            return;

        }

        const reader = new FileReader();

        reader.onload = function (e) {

            profileImage.src = e.target.result;

        };

        reader.readAsDataURL(file);

    });
