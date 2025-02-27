// Configuration du graphique
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('heartRateChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['40 dB', '60 dB', '80 dB', '100 dB'],
                datasets: [{
                    label: 'Fréquence Cardiaque (BPM)',
                    data: [71.80, 79.25, , 95],
                    borderColor: '#4f46e5',
                    backgroundColor: 'rgba(79, 70, 229, 0.1)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
});