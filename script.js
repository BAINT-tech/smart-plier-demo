function simulateReading() {
  let voltage = Math.floor(Math.random() * 250); // 0–250V
  let current = Math.floor(Math.random() * 15);  // 0–15A

  document.getElementById('voltage').innerText = voltage + "V";
  document.getElementById('current').innerText = current + "A";

  let status = "SAFE";
  let statusClass = "safe";

  if (voltage > 220 || current > 10) {
    status = "SHOCK ALERT!";
    statusClass = "danger";
  } else if (voltage > 180 || current > 7) {
    status = "CAUTION";
    statusClass = "warning";
  }

  let statusElement = document.getElementById('status');
  statusElement.innerText = status;
  statusElement.className = statusClass;
}
