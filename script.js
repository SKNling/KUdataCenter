function toggleQA(el) {
  const item = el.closest('.qa-item');
  item.classList.toggle('open');
}
function switchTab(tab) {
  document.querySelectorAll('.qa-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.qa-panel').forEach(p => p.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 30000);
