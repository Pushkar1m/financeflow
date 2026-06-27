const ctx = document.getElementById("expenseChart");

if (ctx) {

    new Chart(ctx, {

        type: "line",

        data: {

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

            datasets: [{

                label: "Expenses",

                data: [12000, 18000, 15000, 22000, 19000, 25000],

                borderColor: "#4F46E5",

                backgroundColor: "rgba(79,70,229,0.12)",

                borderWidth: 3,

                fill: true,

                tension: 0.4,

                pointRadius: 5,

                pointHoverRadius: 8,

                pointBackgroundColor: "#4F46E5"

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    grid: {

                        color: "#ececec"

                    }

                },

                x: {

                    grid: {

                        display: false

                    }

                }

            }

        }

    });

}