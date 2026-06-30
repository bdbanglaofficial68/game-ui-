// ==========================================
// WinBD Dashboard
// dashboard.js - Part 1
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // DOM Elements
    // ==========================

    const username =
        document.getElementById("username");

    const walletBalance =
        document.getElementById("walletBalance");

    const totalDeposit =
        document.getElementById("totalDeposit");

    const totalWithdraw =
        document.getElementById("totalWithdraw");

    const totalInvestment =
        document.getElementById("totalInvestment");

    const totalBonus =
        document.getElementById("totalBonus");

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
    // Session Check
    // ==========================

    const currentUser =
        localStorage.getItem("username");

    if (!currentUser) {

        window.location.href = "login.html";

        return;

    }

    username.textContent = currentUser;

    // ==========================
    // Load Dashboard Data
    // ==========================

    function loadDashboard() {

        showLoader();

        const profile =
            JSON.parse(
                localStorage.getItem("winbdProfile")
            ) || {};

        walletBalance.textContent =
            "৳ " + (profile.balance || 0);

        totalDeposit.textContent =
            "৳ " + (profile.totalDeposit || 0);

        totalWithdraw.textContent =
            "৳ " + (profile.totalWithdraw || 0);

        totalInvestment.textContent =
            "৳ " + (profile.totalInvestment || 0);

        totalBonus.textContent =
            "৳ " + (profile.bonus || 0);

        setTimeout(() => {

            hideLoader();

        }, 600);

    }

    loadDashboard();

    // ==========================
    // Utility
    // ==========================

    function refreshDashboard() {

        loadDashboard();

        showToast("Dashboard Updated");

    }

    window.refreshDashboard =
        refreshDashboard;

});
