
document.getElementById("plot-btn").addEventListener("click", function () {
  // Get data input
  const rawData = document.getElementById("data-input").value;
  const plotType = document.getElementById("plot-type").value;

  // Parse CSV data
  const lines = rawData.split("\n");
  const labels = [];
  const data = [];
  lines.forEach((line) => {
    const [x, y] = line.split(",");
    if (x && y) {
      labels.push(x.trim());
      data.push(parseFloat(y.trim()));
    }
  });

  // Create Chart.js plot
  const ctx = document.getElementById("plot-canvas").getContext("2d");
  new Chart(ctx, {
    type: plotType,
    data: {
      labels: labels,
      datasets: [{
        label: 'Plot Data',
        data: data,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Dynamic Plot'
        }
      }
    }
  });
});
