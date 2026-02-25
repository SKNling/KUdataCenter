function toggleQA(el) {
  const item = el.closest('.qa-item');
  item.classList.toggle('open');
}
let allOpen = false;
function toggleAll() {
  allOpen = !allOpen;
  document.querySelectorAll('.qa-item').forEach(item => {
    if (allOpen) item.classList.add('open');
    else item.classList.remove('open');
  });
}
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 30000);
