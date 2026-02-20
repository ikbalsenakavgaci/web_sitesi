// Sayfa yüklendiğinde çalışacak fonksiyon
function temaKontrol() {
    const bodyEl = document.body;
    const toggleIcon = document.getElementById('toggle-icon');
    const savedMode = localStorage.getItem('kahve-tema');

    // Hafızada 'dark' varsa modu aç
    if (savedMode === 'dark') {
        bodyEl.classList.add('dark-mode');
        if (toggleIcon) toggleIcon.innerText = '🌙';
    }
}

// Butona tıklandığında çalışacak fonksiyon
function temaDegistir() {
    const bodyEl = document.body;
    const toggleIcon = document.getElementById('toggle-icon');

    bodyEl.classList.toggle('dark-mode');

    if (bodyEl.classList.contains('dark-mode')) {
        localStorage.setItem('kahve-tema', 'dark'); //
        if (toggleIcon) toggleIcon.innerText = '🌙';
    } else {
        localStorage.setItem('kahve-tema', 'light');
        if (toggleIcon) toggleIcon.innerText = '☀️';
    }
}

// Sayfa her açıldığında kontrolü yap
window.onload = temaKontrol;