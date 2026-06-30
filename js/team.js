// ==========================================
// WinBD Team
// team.js - Part 1
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const teamTable =
        document.querySelector("#teamTable tbody");

    const searchMember =
        document.getElementById("searchMember");

    const levelFilter =
        document.getElementById("levelFilter");

    const referralCode =
        document.getElementById("referralCode");

    const copyReferral =
        document.getElementById("copyReferral");

    const totalMembers =
        document.getElementById("totalMembers");

    const directMembers =
        document.getElementById("directMembers");

    const totalCommission =
        document.getElementById("totalCommission");

    const loader =
        document.getElementById("loader");

    const toast =
        document.getElementById("toast");

    let members =
        JSON.parse(localStorage.getItem("teamMembers")) || [

        {
            username: "player001",
            level: "Level 1",
            commission: 250,
            status: "Active"
        },

        {
            username: "player002",
            level: "Level 2",
            commission: 120,
            status: "Pending"
        },

        {
            username: "player003",
            level: "Level 3",
            commission: 80,
            status: "Active"
        }

    ];

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

        teamTable.innerHTML = "";

        if (data.length === 0) {

            teamTable.innerHTML = `
                <tr>
                    <td colspan="4">No team members found.</td>
                </tr>
            `;

            return;

        }

        data.forEach(member => {

            teamTable.innerHTML += `

            <tr>

                <td>${member.username}</td>

                <td>${member.level}</td>

                <td>৳${member.commission}</td>

                <td>

                    <span class="${member.status.toLowerCase()}">

                        ${member.status}

                    </span>

                </td>

            </tr>

            `;

        });

    }

    function updateSummary() {

        totalMembers.textContent =
            members.length;

        directMembers.textContent =
            members.filter(
                m => m.level === "Level 1"
            ).length;

        const commission =
            members.reduce(
                (sum, m) => sum + m.commission,
                0
            );

        totalCommission.textContent =
            "৳" + commission.toFixed(2);

    }

    renderTable(members);

    updateSummary();
