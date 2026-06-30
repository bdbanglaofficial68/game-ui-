// ======================================
// WinBD Withdraw
// withdraw.js - Part 1
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("withdrawForm");

    const amount = document.getElementById("amount");
    const method = document.getElementById("method");
    const accountNumber = document.getElementById("accountNumber");
    const pin = document.getElementById("pin");

    const loader = document.getElementById("loader");
    const toast = document.getElementById("toast");
    const walletBalance = document.getElementById("walletBalance");

    let balance =
        Number(localStorage.getItem("walletBalance")) || 0;

    walletBalance.textContent = `৳ ${balance.toFixed(2)}`;

    function showLoader() {
        if (loader) loader.classList.remove("hidden");
    }

    function hideLoader() {
        if (loader) loader.classList.add("hidden");
    }

    function showToast(message, success = true) {

        if (!toast) {
            alert(message);
            return;
        }

        toast.textContent = message;

        toast.className = "toast show";

        toast.style.background =
            success ? "#22c55e" : "#ef4444";

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    function validate() {

        const value = Number(amount.value);

        if (value < 100) {

            showToast(
                "Minimum withdrawal is ৳100.",
                false
            );

            amount.focus();

            return false;
        }

        if (value > balance) {

            showToast(
                "Insufficient wallet balance.",
                false
            );

            amount.focus();

            return false;
        }

        if (!method.value) {

            showToast(
                "Select a withdrawal method.",
                false
            );

            return false;
        }

        if (accountNumber.value.trim().length < 10) {

            showToast(
                "Invalid account number.",
                false
            );

            accountNumber.focus();

            return false;
        }

        if (pin.value.length !== 6) {

            showToast(
                "PIN must be exactly 6 digits.",
                false
            );

            pin.focus();

            return false;
        }

        return true;
    }
