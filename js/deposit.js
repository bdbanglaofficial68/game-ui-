// deposit.js

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("depositForm");

    const amount = document.getElementById("amount");
    const method = document.getElementById("paymentMethod");
    const trxid = document.getElementById("trxid");
    const note = document.getElementById("note");
    const proof = document.getElementById("paymentProof");

    const loader = document.getElementById("loader");
    const toast = document.getElementById("toast");

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

        toast.style.background = success ? "#22c55e" : "#ef4444";

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    if (proof) {
        proof.addEventListener("change", () => {

            if (!proof.files.length) return;

            const file = proof.files[0];

            const maxSize = 5 * 1024 * 1024;

            if (file.size > maxSize) {

                showToast("Image must be less than 5MB.", false);

                proof.value = "";

            }

        });
    }

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const depositAmount = Number(amount.value);
        const paymentMethod = method.value;
        const transactionId = trxid.value.trim();

        if (depositAmount < 100) {
            showToast("Minimum deposit is ৳100.", false);
            amount.focus();
            return;
        }

        if (!paymentMethod) {
            showToast("Please select a payment method.", false);
            method.focus();
            return;
        }

        if (transactionId.length < 6) {
            showToast("Invalid Transaction ID.", false);
            trxid.focus();
            return;
        }

        showLoader();

        try {

            // Demo delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            const depositData = {
                amount: depositAmount,
                method: paymentMethod,
                transactionId: transactionId,
                note: note.value.trim(),
                createdAt: new Date().toISOString(),
                status: "Pending"
            };

            const history =
                JSON.parse(localStorage.getItem("depositHistory")) || [];

            history.unshift(depositData);

            localStorage.setItem(
                "depositHistory",
                JSON.stringify(history)
            );

            hideLoader();

            showToast("Deposit request submitted successfully.");

            form.reset();

        } catch (error) {

            hideLoader();

            console.error(error);

            showToast("Something went wrong.", false);

        }

    });

});
