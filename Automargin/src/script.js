document.addEventListener('DOMContentLoaded', function() {
    // Data for the chart
    const allData = {
        models: ['Model A', 'Model B', 'Model C', 'Model D', 'Model E', 'Model F', 'Model G', 'Model H', 'Model I', 'Model J'],
        newListings: [50, 75, 100, 125, 80, 70, 60, 50, 100, 90],
        usedListings: [200, 180, 210, 220, 150, 140, 230, 200, 160, 180],
        avgPrice: [30000, 28000, 27000, 29000, 31000, 33000, 35000, 34000, 32000, 31000],
        profitMargin: [10, 15, 20, 12, 14, 18, 20, 17, 19, 15]
    };

    // Chart initialization
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: allData.models,
            datasets: [
                {
                    label: 'New Listings',
                    data: allData.newListings,
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Used Listings',
                    data: allData.usedListings,
                    backgroundColor: 'rgba(255, 159, 64, 0.8)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Average Selling Price',
                    data: allData.avgPrice,
                    type: 'line',
                    borderColor: 'rgba(255, 205, 86, 1)',
                    backgroundColor: 'rgba(255, 205, 86, 0.2)',
                    yAxisID: 'y1',
                    fill: false
                },
                {
                    label: 'Profit Margin (%)',
                    data: allData.profitMargin,
                    type: 'line',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    yAxisID: 'y1',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Number of Listings'
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Price and Margin (%)'
                    },
                    grid: {
                        drawOnChartArea: false // Prevents grid lines from overlapping with the primary Y axis
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Car Model Profitability Insights (Listings, Avg Price, Margin)'
                }
            }
        }
    });

    // Function to update chart data based on filters
    function updateChart(newLabels, newNewListings, newUsedListings, newAvgPrice, newProfitMargin) {
        chart.data.labels = newLabels;
        chart.data.datasets[0].data = newNewListings;
        chart.data.datasets[1].data = newUsedListings;
        chart.data.datasets[2].data = newAvgPrice;
        chart.data.datasets[3].data = newProfitMargin;
        chart.update();
    }

    // Event listener for "Make & Model" filter
    document.getElementById('make-model').addEventListener('change', function() {
        const selectedMake = this.value;

        // Example: Adjust data based on the selected make (you can apply real logic here)
        if (selectedMake === 'Toyota') {
            updateChart(
                ['Model A', 'Model B'], 
                [50, 70], 
                [120, 150], 
                [30000, 28000], 
                [12, 15]
            );
        } else if (selectedMake === 'Honda') {
            updateChart(
                ['Model C', 'Model D'], 
                [90, 110], 
                [180, 210], 
                [29000, 31000], 
                [13, 16]
            );
        } else {
            // Default data if no filter is selected or reset
            updateChart(
                allData.models, 
                allData.newListings, 
                allData.usedListings, 
                allData.avgPrice, 
                allData.profitMargin
            );
        }
    });

    // Event listener for "Location" filter
    document.getElementById('location').addEventListener('change', function() {
        const selectedLocation = this.value;

        // Example: Adjust data based on the selected location (you can apply real logic here)
        if (selectedLocation === 'California') {
            updateChart(
                ['Model E', 'Model F'], 
                [100, 120], 
                [190, 210], 
                [32000, 33000], 
                [18, 20]
            );
        } else if (selectedLocation === 'Texas') {
            updateChart(
                ['Model G', 'Model H'], 
                [110, 90], 
                [200, 180], 
                [34000, 32000], 
                [17, 19]
            );
        } else {
            // Default data if no filter is selected or reset
            updateChart(
                allData.models, 
                allData.newListings, 
                allData.usedListings, 
                allData.avgPrice, 
                allData.profitMargin
            );
        }
    });

    // Event listener for "Body Type" filter
    document.getElementById('sedan').addEventListener('change', function() {
        // Example: Update chart data for Sedan
        if (this.checked) {
            updateChart(
                ['Model A', 'Model C'], 
                [80, 90], 
                [150, 160], 
                [31000, 30000], 
                [13, 14]
            );
        } else {
            // Reset to default data if unchecked
            updateChart(
                allData.models, 
                allData.newListings, 
                allData.usedListings, 
                allData.avgPrice, 
                allData.profitMargin
            );
        }
    });

    // Add similar event listeners for other filters like Drive Type, Fuel Type, etc.
});
