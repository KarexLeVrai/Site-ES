document.addEventListener("DOMContentLoaded", function() {
    const data = [
        { eleve: "Élève 1", repos: 70, dB40: 72, dB60: 76, dB80: 82 },
        { eleve: "Élève 2", repos: 68, dB40: 69, dB60: 74, dB80: 80 },
        { eleve: "Élève 3", repos: 72, dB40: 73, dB60: 78, dB80: 85 },
        { eleve: "Élève 4", repos: 65, dB40: 67, dB60: 72, dB80: 78 },
        { eleve: "Élève 5", repos: 75, dB40: 77, dB60: 82, dB80: 88 },
        { eleve: "Élève 6", repos: 69, dB40: 70, dB60: 75, dB80: 81 },
        { eleve: "Élève 7", repos: 71, dB40: 73, dB60: 77, dB80: 83 },
        { eleve: "Élève 8", repos: 67, dB40: 68, dB60: 72, dB80: 79 },
        { eleve: "Élève 9", repos: 73, dB40: 75, dB60: 79, dB80: 86 },
        { eleve: "Élève 10", repos: 66, dB40: 68, dB60: 71, dB80: 77 }
    ];

    const tableBody = document.getElementById("data-table");
    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.eleve}</td><td>${row.repos}</td><td>${row.dB40}</td><td>${row.dB60}</td><td>${row.dB80}</td>`;
        tableBody.appendChild(tr);
    });

    const ctx = document.getElementById("heartRateChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Repos", "40 dB", "60 dB", "80 dB"],
            datasets: [{
                label: "Fréquence Cardiaque Moyenne (BPM)",
                data: [69.6, 71.8, 76.6, 82.9],
                borderColor: "#4f46e5",
                backgroundColor: "rgba(79, 70, 229, 0.1)",
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: "#4f46e5"
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 60,
                    suggestedMax: 90
                }
            }
        }
    });
});
