// =========================================
// WinBD Transactions
// transactions.js - Part 1
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const tableBody =
        document.querySelector("#transactionsTable tbody");

    const searchInput =
        document.getElementById("searchTransaction");

    const typeFilter =
        document.getElementById("typeFilter");

    const statusFilter =
        document.getElementById("statusFilter");

    const dateFilter =
        document.getElementById("dateFilter");

    const loader =
        document.getElementById("loader");

    const toast =
        document.getElementById("toast");

    let transactions = JSON.parse(
        localStorage.getItem("transactions")
    ) || [];

    // Demo Data
    if (transactions.length === 0) {

        transactions = [

            {
                id: "TRX100001",
                type: "Deposit",
                amount: 1000,
                status: "Approved",
                date: "2026-06-30"
            },

            {
                id: "TRX100002",
                type: "Withdraw",
                amount: 500,
                status: "Pending",
                date: "2026-06-29"
            },

            {
                id: "TRX100003",
                type: "Investment",
                amount: 2500,
                status: "Approved",
                date: "2026-06-28"
            }

        ];

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );

    }

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

    function renderTable(data) {

        tableBody.innerHTML = "";

        if (data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="5">
                        No Transactions Found
                    </td>
                </tr>
            `;

            return;
        }

        data.forEach(item => {

            tableBody.innerHTML += `

                <tr>

                    <td>${item.id}</td>

                    <td>${item.type}</td>

                    <td>৳${item.amount}</td>

                    <td class="${item.status.toLowerCase()}">

                        ${item.status}

                    </td>

                    <td>${item.date}</td>

                </tr>

            `;

        });

    }

    renderTable(transactions);
