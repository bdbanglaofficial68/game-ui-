// ==========================================
// WinBD Investment
// investment.js - Part 1
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("investmentForm");

    const plan = document.getElementById("plan");
    const amount = document.getElementById("amount");

    const dailyProfit =
        document.getElementById("dailyProfit");

    const duration =
        document.getElementById("duration");

    const agreeTerms =
        document.getElementById("agreeTerms");

    const walletBalance =
        document.getElementById("walletBalance");

    const loader =
        document.getElementById("loader");

    const toast =
        document.getElementById("toast");

    let balance =
        Number(localStorage.getItem("walletBalance")) || 0;

    walletBalance.textContent =
        "৳ " + balance.toFixed(2);

    function showLoader() {

        loader.classList.remove("hidden");

    }

    function hideLoader() {

        loader.classList.add("hidden");

    }

    function showToast(message, success = true) {

        toast.textContent = message;

        toast.className = "toast show";

        toast.style.background =
            success ? "#22c55e" : "#ef4444";

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

    function calculateProfit() {

        const selected =
            plan.options[plan.selectedIndex];

        if (!selected.value) {

            dailyProfit.textContent = "৳ 0.00";

            duration.textContent = "0 Days";

            return;

        }

        const roi =
            Number(selected.dataset.roi);

        const days =
            Number(selected.dataset.days);

        const value =
            Number(amount.value);

        duration.textContent =
            days + " Days";

        if (value > 0) {

            const profit =
                (value * roi) / 100;

            dailyProfit.textContent =
                "৳ " + profit.toFixed(2);

        } else {

            dailyProfit.textContent =
                "৳ 0.00";

        }

    }

    plan.addEventListener(
        "change",
        calculateProfit
    );

    amount.addEventListener(
        "input",
        calculateProfit
    );

    function validate() {

        if (!plan.value) {

            showToast(
                "Select an investment plan.",
                false
            );

            return false;

        }

        if (Number(amount.value) < 500) {

            showToast(
                "Minimum investment is ৳500.",
                false
            );

            amount.focus();

            return false;

        }

        if (Number(amount.value) > balance) {

            showToast(
                "Insufficient wallet balance.",
                false
            );

            return false;

        }

        if (!agreeTerms.checked) {

            showToast(
                "Accept the Terms & Conditions.",
                false
            );

            return false;

        }

        return true;

    }
